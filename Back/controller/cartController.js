const db=require("../model")

module.exports={
    createc:async(req,res)=>{
        const newCart = new db.cart(req.body);

        try {
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    //UPDATE
updatec: async (req, res) => {
    try {
      const updatedCart = await db.cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE
deletec:async (req, res) => {
  try {
    await db.cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
},

//GET USER CART
GetCart: async (req, res) => {
    try {
      const cart = await db.cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL

GetAllCart: async (req, res) => {
    try {
      const carts = await db.cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
}