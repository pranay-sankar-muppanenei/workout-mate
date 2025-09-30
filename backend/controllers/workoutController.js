const workSchema=require('../models/work');
const mongoose=require('mongoose');

const getWorkouts=async(req,res)=>{
    const user_id=req.user._id;
    const result=await workSchema.find({user_id}).sort({createdAt:-1 });
    res.status(200).json(result);
};

const getWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"});
    }
    const result=await workSchema.findById(id);
    if(!result){
        return res.status(404).json({error:"No such workout"});
    }
    res.status(200).json(result);
};

const createWorkout=async(req,res)=>{
     const {title,load,reps}=req.body;
     const emptyfields=[];
     if(!title){
        emptyfields.push('title');
     }
     if(!load){
        emptyfields.push('load');
     }
     if(!reps){
        emptyfields.push('reps');
     }
     if(emptyfields.length>0){
        return res.status(400).json({error:"Please Fill in all the Fields",emptyfields})
     }
    try{
        const user_id=req.user._id;
        const workout=await workSchema.create({title,load,reps,user_id});
        res.status(200).json(workout);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const deleteWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"});
    }
    const result=await workSchema.findByIdAndDelete(id);
    if(!result){
        return res.status(404).json({error:"No such workout"});
    }
    res.status(200).json(result);
};

const updateWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"});
    }
    const result=await workSchema.findByIdAndUpdate(id,{
        ...req.body
    });
    if(!result){
        return res.status(404).json({error:"No such workout"});
    }
    res.status(200).json(result);
};

module.exports={createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout};