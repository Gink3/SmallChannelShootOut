import express from 'express'
import bcrypt from 'bcrypt';
import User from '../models/UserModel.js'

const router = express.Router(); 


export const signUpRouter = router.post('/signup', (req, res) => {
   var {firstName, lastName, userName, email, password} = req.body; 
    password = bcrypt.hashSync(password, 12);
    try {
        const newUser = new User({firstName, lastName, userName, email, password}); 
        newUser.save(); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    }
}); 


