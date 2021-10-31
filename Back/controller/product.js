const db=require("../model")

module.exports={

    createp:async (req,res)=>{
      
    const newProduct = new db.product(req.body);
  
    try {
      console.log("before create")
      console.log(req.body)
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
      console.log(savedProduct)
    } catch (err) {
      res.status(500).json(err);
    }
  
    },

   //UPDATE
updatep:async (req, res) => {
  try {
    const updatedProduct = await db.product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
},

//DELETE
 deletep:async (req, res) => {
  try {
    console.log(req.params.id)
    await db.product.findByIdAndDelete(req.params.id);
    const newproduct=await db.product.find()
    res.status(200).json(newproduct);
  } catch (err) {
    res.status(500).json(err);
  }
},

//GET PRODUCT
Getp:async (req, res) => {
  try {
    const product = await db.product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
},

//GET ALL PRODUCTS
GetAllp: async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await db.product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await db.product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await db.product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
},
addcat:async(req,res)=>{
  try{
    const newCat = new db.category(req.body);
    
    const savedCategory = await newCat.save();
    res.status(200).json(savedCategory);
  }catch(err){

  }
}


}