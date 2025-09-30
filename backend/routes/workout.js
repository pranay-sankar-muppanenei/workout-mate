const express=require('express');
const {createWorkout,getWorkout,getWorkouts, deleteWorkout, updateWorkout}=require('../controllers/workoutController');
const requrieAuth=require('../middleware/requireAuth')

//require auth for all workout routes

const router=express.Router();

router.use(requrieAuth)


router.get('/',getWorkouts);

router.get('/:id',getWorkout);

router.post('/',createWorkout);

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports=router;