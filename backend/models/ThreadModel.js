import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const ThreadSchema = new Schema({
threadID: {
    type:Number, 
    trim: true, 
    default: ""
},
videoLink: {
    type:String, 
    trim: true, 
    default: ""
},
userName: {
    type:String,
    trim: true, 
    default: ""
},
comments: {
    type:String,
    trim: true, 
    default: ""
},
TimeOfCreation:{
    type:Date,
    trim:true, 
    default:""
},

});


const Thread = mongoose.model('Thread', ThreadSchema); 
export default Thread; 