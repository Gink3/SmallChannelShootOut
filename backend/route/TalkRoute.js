import Thread from '../models/ThreadModel.js'
import express from 'express'
const router = express.Router(); 

export const talkRouter = router.post('/talk',  async (req, res) => {
   var {link, title, body} = req.body; 
    try {
        const newThread = new Thread({link, title, body}); 
        newThread.save(); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}); 
