const db=require("../model")

module.exports={
    createo:async(req,res)=>{
        const newOrder = new db.order(req.body);

        try {
            const savedOrder = await newOrder.save();
            res.status(200).json(savedOrder);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    //UPDATE
updateo: async (req, res) => {
    try {
      const updatedOrder = await db.order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE
deleteo:async (req, res) => {
  try {
    await db.order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
},

//GET USER ORDER
Getorder: async (req, res) => {
    try {
      const order = await db.order.findOne({ userId: req.params.userId });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL

GetAllorder: async (req, res) => {
    try {
      const orders = await db.order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET MONTHLY INCOME

monthlyincome: async (req, res) => {
  const productId="61723c49dbf4a1acd3f8de98"//req.query.pid
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await db.order.aggregate([
        { $match: { createdAt: { $gte: previousMonth },...(productId && {products:{
          $elemMatch:{productId}
        }}) } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  
}
}