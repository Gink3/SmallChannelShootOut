import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/UserModel.js' //importing models from user models from mongodb

const router = express.Router(); 

export const loginRouter = router.post('/login',  async (req, res) => {
   const {email, password} = req.body; 
    try{
        const oldUser = await User.findOne({email: email}); //see of the email address exists in database
        if (!oldUser) {
            return res.json({Message:"An account associated with the email does not exist. Try Signup instead."})
        }
        else{
        const correctPassword = await bcrypt.compare(password, oldUser.password)
        if (!correctPassword){
            return res.json({Message: "Wrong Password"});
        }
        else {
            return res.json({Message: "Successfull"});
        }
    }
}
    catch(error) {
    res.status(409).json({Message: error.message});
    }
});
