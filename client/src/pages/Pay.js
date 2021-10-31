import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'

const KEY="pk"

const Pay = () => {
    const [stripeToken,setstripeToken]=useState(null)
    const history=useHistory()
const onToken=(token)=>{
    //console.log(token)
setstripeToken(token)

}

useEffect(()=>{
const makeReq= async ()=>{
try{
const res = await axios.post("http://localhost:8080/api/checkout/payment",{token:stripeToken.id,amount:200})
console.log(res.data)
history.push("/Success")

}catch(err){
    console.log(err)
}
}
stripeToken && makeReq()
},[stripeToken,history])

    return (
        <div
        style={{height:"100vh",
                 display:'flex',
                 alignItems:"center",
                 justifyContent:"center"}}>
                     {stripeToken?(<span>processing please waite...</span>):(
                     <StripeCheckout name="spericorn" image="https://www.spericorn.com/wp-content/themes/spericorn_new/assets/img/logo-dark.png"
                                     billingAddress
                                     shippingAddress
                                     description="Your total is $20"
                                     amount={2000}
                                     token={onToken}
                                     stripeKey={KEY}
                                     >

                     <button style={{
                         border:"none",
                         width:120,
                         borderRadius:5,
                         padding:"20px",
                         backgroundColor:"black",
                         color:"white"

                     }}>
                         Pay Now
                         </button>
                         </StripeCheckout>)}
            
        </div>
    )
}

export default Pay
