import express from 'express'
import bcrypt from 'bcrypt';
import User from '../models/UserModel.js' //importing models from user models from mongodb
import jwt from 'jsonwebtoken';
const router = express.Router(); 


///signup 
export const signUpRouter = router.post('/signup',  async (req, res) => {
   var {firstName, lastName, userName, email, password, verifyPaswrd} = req.body; //storing the data got from frontend

   //check to see if all fields have input
   if (firstName == "" || userName == "" || email == "" || password == "" || verifyPaswrd == ""){
        return res.json({Message:"Please enter all fields." });  
   }

   //password must be more than 8 letter long
   if (password.length < 8){
       return res.json({Message:"Password must contain 8 letters."})
   }

   //password and verify password must be same
   if (password != verifyPaswrd){
       return res.json({Message:"Confirm your password again."})
   } 
    try {
        //encrypting the password
        password = bcrypt.hashSync(password, 12);
        const newUser = new User({firstName, lastName, userName, email, password}); //setting up new user
        const oldUser = await User.findOne({email: email}); //see if the email address exists in database
        //error message
        if (oldUser){
            return res.json({Message:"An account associated with the email already exists. Try Login instead."})
        }
        else{
            //save user, store the saved user ID in token and pass it as cookie
            const saveUser = await newUser.save(); 
            const token =  jwt.sign({
                user: saveUser._id         
            }, process.env.JWT_PASS); 

            //Send the cookie to front end as token
            res.cookie("token", token, {
                httpOnly: true,
            }).send();
        }
    }
    catch(error) {
        res.status(409).json({Message: error.message});
    }
}); 


