
import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import {mobile} from "../Responsive";
import { useHistory, useLocation } from 'react-router';


const Container=styled.div``;

const Title=styled.h1``;

const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`;

const Filter=styled.div`
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}`;

const FilterText=styled.span`
font-size:20px;
font-weight:600px;
padding:10px;
${mobile({ marginRight: "0px" })}`;

const Select=styled.select`
padding:10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}`;

const Option=styled.option``;

export const ProductList = () => {
  const location=useLocation()
  const cat=location.pathname.split("/")[2]
  const [filters,setFilter]=useState({})
  const [sort,setSort]=useState("newest")

  const handleFilters=(e)=>{
  const value=e.target.value;
  setFilter({...filters,
    [e.target.name]:value})
  }
  //console.log(filters)
  //console.log(sort)
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                <FilterText>
                    filter products:
                    </FilterText>
                    <Select name="color" onClick={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size"onClick={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
                </Filter>
                <Filter>
                    <FilterText>
                    sort products:
                    </FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
