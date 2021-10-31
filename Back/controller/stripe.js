const env=require("dotenv").config()
const stripe=require("stripe")("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")
console.log(process.env.STRIPE_KEY)
module.exports={
  
    payment:async(req,res)=>{
      /*console.log("enter")
      console.log(req.body)
  stripe.charges.create({
    source:req.body.token,
    amount:req.body.amount,
    currency:"usd",

    },(stripeErr,stripeRes)=>{
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr)
      } else {
        res.status(200).json(stripeRes);
      }
    })*/
    stripe.customers.create({
      email:"nithinpj333@gmail.com",
      //source:req.body.stripeTokenId,
      name:"nithin p j",
      address:{
        line1:'abc',
        postal_code:'671532',
        city:'rajapuram',
        state:"kerala",
        country:"india"
      }
    }).then(
    stripe.charges.create({
      amount: req.body.amount,
      source: req.body.token,
      currency: 'usd'
    })).then(function(data) {
      console.log('Charge Successful')
      res.json(data)
    }).catch(function(error) {
      console.log('Charge Fail',error)
      res.status(500).end()
    })
} 


}
/*return stripe.customers.create({
  email:req.body.email,
  //source:req.body.stripeTokenId,
  name:"nithin p j",
  address:{
    line1:'abc',
    postal_code:'671532',
    city:'rajapuram',
    state:"kerala",
    country:"india"
  }
}).then(
stripe.charges.create({
  amount: total,
  source: req.body.stripeTokenId,
  currency: 'usd'
})).then(function() {
  console.log('Charge Successful')
  res.json({ message: 'Successfully purchased items' })
}).catch(function(error) {
  console.log('Charge Fail',error)
  res.status(500).end()*/