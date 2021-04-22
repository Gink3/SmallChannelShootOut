import Comment from '../models/CommentModel.js'
import express from 'express'
const router = express.Router(); 


export const postcommentRouter = router.post('/comment',  async (req, res) => {
    var {author, comment, postId} = req.body; 
     try {
         const newComment = new Comment({author, comment, postId}); 
         newComment.save(); 
         res.json("Saved"); 
     }
     catch(error) {
         res.status(409).json({message: error.message});
     } 
 }); 


export const getcommentRouter = router.get("/comment", (req, res) => {
    try {
        
      Comment.find({}, (err, result) => {
          
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