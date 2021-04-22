import Reply from '../models/ReplyModel.js'
import express from 'express'
const router = express.Router(); 
import {auth} from '../middleware/authentication.js'
import User from '../models/UserModel.js' //importing models from user models from mongodb

export const postreplyRouter = router.post('/reply', auth, async (req, res) => {
  const oldUser = await User.findOne({_id: req.user});
  var authorName = oldUser.userName
    var {reply, commentId} = req.body; 
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