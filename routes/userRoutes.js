const express=require("express")
const {userRegister,userLogin,findUser,getAllUers}=require("../controllers/userControler")

//router
const router=express.Router();

//routes
router.post('/register',userRegister)
router.post('/login',userLogin)
router.get("/find/:userId",findUser)
router.get("/",getAllUers)


module.exports=router;



