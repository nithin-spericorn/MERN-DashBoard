const router=require("express").Router()
const products=require("../data/product")

const controller=require("../controller/auth")

router.post("/signin",controller.signUp)
router.post("/login",controller.login) 


module.exports=router;