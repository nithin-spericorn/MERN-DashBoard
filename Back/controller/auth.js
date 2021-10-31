const env = require("dotenv").config();
const secret=process.env.SECRET
const shortid=require("shortid")

const db=require("../model")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const products=require("../data/product")

module.exports = {

     

    signUp: async (req, res) => {

      const salt = await bcryptjs.genSalt(10);

      const password = await bcryptjs.hash(req.body.password, salt);
      const newUser = new db.user({
        username: req.body.username,
        email: req.body.email,
        password: password
      });
      try {
        const user = await db.user.findOne( { email: req.body.email } );
        if(!user)
        {
            
            
             await db.user.create(newUser);
        }
        else{
            return res.status(400).json({
                success: false,
                message: "User Already Exist Please Login",
              });

        }
        
        return res.status(200).json({
          success: true,
          message: "user created Successfully",
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "something went wrong",
        });
      }
    }
    ,
  
    
    login: async (req, res,next) => {
       console.log(req.body)
    try {
      const user = await db.user.findOne( { email: req.body.email } );
      
      
      if (!user) {
        res.status(400).json({
          message: "No User Found",

        });
       
      } else {
        
        bcryptjs.compare(req.body.password, user.password, (err, result) => {
            console.log(user)
          if (result) {
              console.log("compare true")
            const token = jwt.sign(
              {
                email: user.email,
                id: user._id,
                isAdmin: user.isAdmin,
              },
              process.env.SECRET,
              {expiresIn:"3d"}
            );
          
           res.status(200).json({
              success: true,
              message: "authentication successfull",
              isAdmin:user.isAdmin,
              token: token,
            });
            
           
      
          }
          
          else {
            res.status(401).json({
              success: false,
              message: "invalid credentials",
            });
          }
        
        });
      
      }
    
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
}
}
