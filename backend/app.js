require('dotenv').config();
const express=require('express');
const app=express();

const workoutRoutes=require('./routes/workout');
const authRoutes=require('./routes/user');
const mongoose=require('mongoose');

//connect to db




app.use((req,res,next)=>{
    console.log(req.method,req.path);
    next();
})
app.use(express.json());    


app.use('/api',authRoutes);
app.use('/api',workoutRoutes);    


const PORT = process.env.PORT || 4000; // fallback for local dev
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


module.exports=app;