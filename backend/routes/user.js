const {signUser,loginUser,userList} =require('../controllers/authController');
const express=require('express');
const router=express.Router();


router.get('/users',userList);
router.post('/login',loginUser);

router.post('/signup',signUser);

module.exports=router