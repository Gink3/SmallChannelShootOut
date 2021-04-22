import Thread from '../models/ThreadModel.js'
import express from 'express'
const router = express.Router(); 

export const threadRouter = router.get("/thread", (req, res) => {
  try {
    
    Thread.find({}, (err, result) => {
        
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
export const idthreadRouter = router.get("/thread/:id", async (req, res) => {
       
    try {
        const update=req.body;
      const id=req.params.id;
       
        ///////
        const result = await Thread.findById(id, update);
        res.json(result);

    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }); 

export const changethreadRouter = router.patch('/thread/:id', async (req, res) => {
       
    try {
       
        console.log(req.body)
        const id=req.params.id;
        const{likes, isLiked}= req.body;
        const result = await Thread.updateOne({_id : id}, {$set:{likes: likes}, isLiked:isLiked}).then((result, error)=>{
          if(error){
            console.log(error)
          }
          else {
            res.json(result);
          }
        })
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }); 
