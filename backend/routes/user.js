const {signUser,loginUser} =require('../controllers/authController');
const express=require('express');
const router=express.Router();



router.post('/login',loginUser);

router.post('/signup',signUser);

module.exports=router