const jwt=require("jsonwebtoken")
const db=require("../model")

    /*const verifyTokenAndAuthorization :(req, res, next) => {
        verifyToken(req, res, () => {
          if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
          } else {
            res.status(403).json("You are not alowed to do that!");
          }
        });
      },
      
      const verifyTokenAndAdmin : (req, res, next) => {
        verifyToken(req, res, () => {
          if (req.user.isAdmin) {
            next();
          } else {
            res.status(403).json("You are not alowed to do that!");
          }
        });
      };*/
      
      module.exports = {
        verifyToken : (req, res, next) => {
            const authHeader=req.headers.token;
            if (authHeader) {
                const token = authHeader.split(" ")[1];
                jwt.verify(token, process.env.SECRET, (err, user) => {
                  if (err) res.status(403).json("Token is not valid!");
                  req.user = user;
                  next();
                });
              } else {
                return res.status(401).json("You are not authenticated!");
              }
            },

            verifyTokenAndAdmin : (req, res, next) => {
                  //console.log(req.body)
                  if (req.user.isAdmin) {
                    next();
                  } else {
                    res.status(403).json("You are not alowed to do that!");
                  }
                }
              ,
              verifyTokenAndAuthorization :(req, res, next) => {
                   const id=req.params.id 
                   
                  if (id===req.user.id||req.user.isAdmin) {
                    next();
                  } else {
                    res.status(403).json("You are not alowed to do that!");
                  }
                
              }
      };
