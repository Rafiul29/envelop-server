const express=require("express")
const {userRegister}=require("../controllers/userControler")
//router
const router=express.Router();

//routes
router.post('/register',userRegister)

module.exports=router