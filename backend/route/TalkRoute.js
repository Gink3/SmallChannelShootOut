import Thread from '../models/ThreadModel.js'
import express from 'express'
const router = express.Router(); 
import {auth} from '../middleware/authentication.js'
import User from '../models/UserModel.js' //importing models from user models from mongodb

export const talkRouter = router.post('/talk', auth, async (req, res) => {
const oldUser = await User.findOne({_id: req.user});
var userName = oldUser.userName
   var {link, title, body, likes, isLiked, dislikes} = req.body; 
    try {
        const newThread = new Thread({userName, link, title, body, likes, isLiked, dislikes}); 
        newThread.save(); 
        res.json("Saved"); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}); 
