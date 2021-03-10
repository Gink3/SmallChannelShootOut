import Thread from '../models/ThreadModel.js'
export const createThread = async (req, res) => {  
   var {videoLink, userName, comments} = req.body; 
    try {
        TimeofCreation = Date.now();
        const newThread = new Thread({videoLink, userName, comments, TimeofCreation}); 
        newThread.save(); 
    }
    catch(error) {
        res.status(409).json({message: error.message});
    } 
}; 