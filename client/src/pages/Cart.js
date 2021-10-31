import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import StripeCheckout from "react-stripe-checkout"
import {userRequest} from "../requestMethods"

import {mobile} from "../Responsive";

const KEY=process.env.CHECKOUT_KEY||"pk_live_51JEuA2SDb2shNrKvs5y8mjYXnhsH96SPB47kWUamZdtrTqRN63rSk1haMIhvoxhnXkSBo8mmEyyKZa9Z9zkPsgCU00tY2Eedoa"

const Container=styled.div``;

const Wrapper=styled.div`
padding:20px;
${mobile({ padding: "10px" })}`;

const Title=styled.h1`
font-weight:300;
text-align:center;`;

const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;`;

const TopButton=styled.button`
padding:10px;
font-weight:600;
cursor:pont;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
  props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts=styled.div`
${mobile({ display: "none" })}`;

const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom=styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}`;

const Info=styled.div`
flex:3;
`;



const Product=styled.div`
display:flex;
justify-content:space-between;
${mobile({ flexDirection: "column" })}`;

const ProductDetail=styled.div`
flex:2;
display:flex;
`;

const Image=styled.img`
width:200px;
${mobile({ width: "100px" })}`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName=styled.span``;


const  ProductId=styled.span``;

const  ProductSize=styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer=styled.div`
display:flex;

align-items:center;
margin-bottom:20px;
`;

const ProductAmount=styled.div`
font-size:24px;
margin:5px;
${mobile({ margin: "5px 15px" })}
`;

const ProductPrice=styled.div`
font-size:30px;
font-weight:200
${mobile({ marginBottom: "20px" })}
`;

const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}
`;

const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;
`;

const Summary = styled.div`
  flex: 1;
  padding:20px;
  background-color:;
  box-shadow: 10px 10px blue;
  border: solid 1px blue;
  box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
  -moz-box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
    -webkit-box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
    -o-box-shadow: 10px -10px 5px  rgba(0,0,0,0.6);
    border-radius:25px;
  height: 50vh;`


const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: orange;
  color: white;
  font-weight: 600;
  border: 2px solid blue;
  border-radius: 25px;
  ${mobile({ flexDirection: "column" })}
`;


const Cart = () => {
 const history=useHistory()
  const cart=useSelector(state=>state.cart)
const [stripeToken,setStripeToken]=useState(null)
  const onToken=(token)=>{
setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log("res is",res)
        history.push("/success", {
          stripeData: res,
          products: cart, });
          console.log(res.data,"stripeData")
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  console.log(stripeToken)
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your BAG</Title>
                <Top>
                  <Link to="/">
                    <TopButton>Continue Shopping</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Chech out Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                      
                       {cart.products.map(product=>( <Product>
                            <ProductDetail>
                            <Image src={product.img} />
                            <Details>
                                <ProductName>
                                <b>Product:</b> {product.title}
                                </ProductName>
                                <ProductId>
                               <b>ID:</b> {product._id}
                                </ProductId>
                                <ProductColor color={product.color}/>
                                <ProductSize> <b>Size:</b> {product.size}</ProductSize>
                            </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>${product.price}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr/>
                    
                    </Info>
                
                    <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Spericorn Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
                </Bottom>
            </Wrapper>
           
            <Footer/>
        </Container>
    )
}

export default Cart
