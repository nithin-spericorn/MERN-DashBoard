const db=require("../model")
const bcryptjs=require("bcryptjs")


module.exports = {
update: async (req,res)=>{
    if (req.body.password) {
        const salt = await bcryptjs.genSalt(10);

         req.body.password = await bcryptjs.hash(req.body.password, salt);
       
      }
    
      try {
        const {id} = req.params
        const updatedUser = await db.user.findByIdAndUpdate(
         id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json("user update successfully");
      } catch (err) {
        res.status(500).json(err);
      }
      

      
   
        
    },

    //DELETE
Delete: async (req, res) => {
    try {
        const {id} = req.params
      await db.user.findByIdAndDelete(id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  ;
},

 GetUser:async (req, res) => {
    try {
        const {id} = req.params
      const user = await db.user.findById(id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
      
    } catch (err) {
      res.status(500).json(err);
    }
  
},
//GET ALL USER
 AllUsers:async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await db.user.find().sort({ _id: -1 }).limit(5)
        : await db.user.find();
      res.status(200).json(users);
      console.log(users)
    } catch (err) {
      res.status(500).json(err);
    }
  
},
//GET USER STATS

 stats:async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await db.user.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
 
}
}
