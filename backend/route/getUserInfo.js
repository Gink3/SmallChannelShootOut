import express from 'express'
import User from '../models/UserModel.js' //importing models from user models from mongodb
import {auth} from '../middleware/authentication.js'

const router = express.Router(); 
export const userInfoRouter = router.get('/userInfo', auth,  async (req, res) => {

    try {
        const oldUser = await User.findOne({_id: req.user});
        if(!oldUser){
            return res.json("Something went wrong"); 
        }
        res.json(oldUser); 
     }
     catch(error) {
         res.status(409).json({Message: error.message});
     }
 }); 
 
 
 