const express = require('express')
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');
const {update,Delete,GetUser,AllUsers,stats} =require("../controller/user")


const router = express.Router();

router.put("/:id",verifyToken,update)
router.put("/:id", verifyToken,verifyTokenAndAuthorization,Delete)
router.get("/find/:id", verifyToken,verifyTokenAndAuthorization,GetUser)
router.get("/", verifyToken,verifyTokenAndAdmin,AllUsers)
router.get("/stats", verifyToken,verifyTokenAndAdmin,stats)

module.exports = router;