import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const CommentSchema = new Schema({
autor: {
    type:String,
    trim: true, 
    default: ""
},
comment: {
    type:String, 
    trim: true, 
    default: ""
},
postId: {
    type:String, 
    trim: true, 
    default: ""
},

date: {
    type: Date, 
    default: Date.now
},
});


const Comment = mongoose.model('Comment', CommentSchema); 
export default Comment; 