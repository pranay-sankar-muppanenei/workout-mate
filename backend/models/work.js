const mongoose=require('mongoose');

const workSchema=new mongoose.Schema({
    title:{
        type:String,
    requried:true
    },
    load:{  
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
},{timestamps:true});
module.exports=mongoose.model('work',workSchema);