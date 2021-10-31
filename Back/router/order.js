const router=require("express").Router()
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");

  const {createo,updateo,deleteo,Getorder,GetAllorder,monthlyincome} =require("../controller/order")

  router.post("/", createo)
  router.put("/:id", verifyToken,verifyTokenAndAdmin, updateo)
  router.delete("/:id", verifyToken,verifyTokenAndAdmin, deleteo)
  router.get("/find/:userId", verifyToken,verifyTokenAndAuthorization,Getorder) 
  router.get("/", verifyToken,verifyTokenAndAdmin, GetAllorder)
  router.get("/income", verifyToken,verifyTokenAndAdmin,monthlyincome)


module.exports=router;