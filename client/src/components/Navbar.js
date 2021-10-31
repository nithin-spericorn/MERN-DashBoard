import React from 'react'
import styled from "styled-components"
import {AddShoppingCartOutlined, Search} from "@material-ui/icons"
import { Badge } from '@material-ui/core';

import { mobile } from '../Responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
  height: 60px;
  ${mobile( {height: "50px"} )}`;

  const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({ padding: "10px 0px" })}
  `;
  /* padding: 10px 20px;  top -bottom and left -right*/

  const Left=styled.div`flex:1;
  display:flex;
  align-items: center;`
  const Center=styled.div`flex:1;
  text-align:center;`
  const Right=styled.div`flex:1;
  display:fex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}`

  const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display:flex;
  align-item:center;
  margin-left:25px;
  padding:5px;`

  const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo=styled.h1`
${mobile({ fontSize: "24px" })}`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}`


const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity)
 
    return (
        <Container>
            <Wrapper>
            <Left><Language>En</Language>
            <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "red", fontSize: 25 }} />
            </SearchContainer>
            </Left>


            <Center>
                <Logo>flipKart</Logo>
            </Center>


            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SignIn</MenuItem>
                <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                  <AddShoppingCartOutlined/>
                  </Badge>
                </MenuItem>
                </Link>
            </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar
