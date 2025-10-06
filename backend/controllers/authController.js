const authSchema =require( '../models/auth')
const bcrypt=require('bcrypt')
const validator=require('validator');
const jwt=require('jsonwebtoken')

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});

}



const loginUser=async (req,res)=>{
    const {email,password}=req.body;

    if(!email||!password)return res.status(400).json({error:"Please fill in all fields"});

    if(!validator.isEmail(email))return res.status(400).json({error:"InValid Email"})
try{
            const existEmail=await authSchema.findOne({email});
            if(!existEmail)return res.status(400).json({error:"Not Found any user"});
            const compare=await bcrypt.compare(password,existEmail.password);
            if(compare){
                const token=createToken(existEmail._id);
                return res.status(200).json({email,token})
            } 
            else{
                return res.status(400).json({error:'incorect password'})
            }               
    
        }
        catch(error){
            res.status(400).json({error})
        }
}

const signUser=async (req,res)=>{
    const {email,password}=req.body;

    if(!email||!password)return res.status(400).json({error:"Please fill in all fields"});

    if(!validator.isEmail(email))return res.status(400).json({error:"Email is not Valid"})
    if(!validator.isStrongPassword(password))return res.status(400).json({error:"Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."})

    const existEmail=await authSchema.findOne({email});
    if(existEmail)return res.status(400).json({error:"An user already exists with this email"})

    const hash=await bcrypt.hash(password,10);


       

    

    try{
    const user=await authSchema.create({
        email,
        password:hash,
    })
    const token=createToken(user._id);
    res.status(200).json({email,token})
}
catch(error){
    res.status(400).json({error:error.message})
}


}

const userList=async(req,res)=>{
    if(process.env.NODE_ENV !== 'production'){
        return res.status(400).json({error:"Not Allowed"})}
    try{
        const users=await authSchema.find({});
        res.status(200).json(users);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={loginUser,signUser,userList}