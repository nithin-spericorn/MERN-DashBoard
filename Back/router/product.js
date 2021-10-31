const router=require("express").Router()
const {createp,updatep,deletep,Getp,GetAllp, addcat}=require("../controller/product");
const {verifyToken, verifyTokenAndAdmin} = require("./verifyToken");

router.post("/create",createp)
router.put("/:id",updatep)
router.delete("/:id", verifyToken,verifyTokenAndAdmin,deletep)
router.get("/findp/:id",Getp) 
router.get("/",GetAllp)
//router.post("/addcat",addcat)

module.exports=router;