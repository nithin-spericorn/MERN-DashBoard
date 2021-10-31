
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const {createc,updatec,deletec,GetCart,GetAllCart}=require("../controller/cartController");


const router=require("express").Router()


router.post("/create", verifyToken,createc)

router.put("/:id",verifyToken, verifyTokenAndAuthorization,updatec)
router.delete("/:id", verifyToken,verifyTokenAndAuthorization, deletec)
router.get("/find/:userId", verifyToken,verifyTokenAndAuthorization,GetCart)

router.get("/", verifyToken,verifyTokenAndAdmin,GetAllCart)


module.exports=router;