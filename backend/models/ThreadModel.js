import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const ThreadSchema = new Schema({
userName: {
    type:String,
    trim: true, 
    default: ""
},
link: {
    type:String, 
    trim: true, 
    default: ""
},
title: {
    type:String, 
    trim: true, 
    default: ""
},
body: {
    type:String, 
    trim: true, 
    default: ""
},
/* comments: {
    type:String,
    trim: true, 
    default: ""
}, */
likes: {
    type:Number,
    trim: true, 
    default: 0
},
isLiked:[{
    type:Number
}],
dislikes: {
    type:Number,
    trim: true, 
    default: 0
},
date: {
    type: Date, 
    default: Date.now
},
});


const Thread = mongoose.model('Thread', ThreadSchema); 
export default Thread; 