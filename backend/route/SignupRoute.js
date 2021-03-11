import express from 'express'
import bcrypt from 'bcrypt';
import User from '../models/UserModel.js' //importing models from user models from mongodb

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
        const oldUser = await User.findOne({email: email}); //see of the email address exists in database
        //error message
        if (oldUser){
            return res.json({Message:"An account associated with the email already exists. Try Login instead."})
        }
        else{
        //saving new user
        newUser.save(function(error,obj){
            if(error) {
                res.json({Message:"Database problem"})
            }
            else {
                res.json({Message:"Successful"})
            }
        }); 
        }
    }
    catch(error) {
        res.status(409).json({Message: error.message});
    }
}); 


