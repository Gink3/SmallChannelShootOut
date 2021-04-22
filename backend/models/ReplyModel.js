import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const CommentSchema = new Schema({
autorName: {
    type:String,
    trim: true, 
    default: ""
},
reply: {
    type:String, 
    trim: true, 
    default: ""
},
commentId: {
    type:String, 
    trim: true, 
    default: ""
},

date: {
    type: Date, 
    default: Date.now
},
});


const Reply = mongoose.model('Reply', CommentSchema); 
export default Reply; 