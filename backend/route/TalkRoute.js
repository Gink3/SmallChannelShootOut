import Thread from '../models/ThreadModel.js'
import express from 'express'
const router = express.Router(); 

export const talkRouter = router.post('/talk',  async (req, res) => {
   var {userName, link, title, body, comments, likes, dislikes} = req.body; 
    try {
        const newThread = new Thread({userName, link, title, body, comments, likes, dislikes}); 
        newThread.save(); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}); 
