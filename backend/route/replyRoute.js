import Reply from '../models/ReplyModel.js'
import express from 'express'
const router = express.Router(); 

export const postreplyRouter = router.post('/reply',  async (req, res) => {
    var {authorName, reply, commentId} = req.body; 
     try {
         const newReply = new Reply({authorName, reply, commentId}); 
         newReply.save(); 
         res.json("Saved"); 
     }
     catch(error) {
         res.status(409).json({message: error.message});
     } 
 });

 export const getreplyRouter = router.get("/reply", (req, res) => {
    try {
        
      Reply.find({}, (err, result) => {
          
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }); 