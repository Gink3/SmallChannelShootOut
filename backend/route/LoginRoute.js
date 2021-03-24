import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/UserModel.js' //importing models from user models from mongodb
import jwt from 'jsonwebtoken'; //importing jason web token in login route
const router = express.Router(); 

export const loginRouter = router.post('/login',  async (req, res) => {
   const {email, password} = req.body; 
    try{
        const oldUser = await User.findOne({email: email}); //see of the email address exists in database
        if (email == "" || password == "" ){
            return res.json({Message:"Please enter all fields." });  
       }
        if (!oldUser) {
            return res.json({Message:"An account associated with the email does not exist. Try Signup instead."})
        }

        else{
        const correctPassword = await bcrypt.compare(password, oldUser.password)
        if (!correctPassword){
            return res.json({Message: "Wrong Password"});
        }
        else {

            //store the signed in user's id in token
            const token =  jwt.sign({
                user: oldUser._id         
            }, process.env.JWT_PASS); 

            //Send token as cookie 
            res.cookie("token", token, {
                httpOnly: true,
            }).send(); 
        }
    }
}
    catch(error) {
    res.status(409).json({Message: error.message});
    }
});
