import {createSlice} from "@reduxjs/toolkit"
import { useState } from "react";

const productSlice=createSlice({
    name:"product",
    initialState:{
                products:null,
                isFetching:false,
                error:false
                  },
    reducers:{
        //Get All
        getProductStart:(state)=>{
            state.isFetching=true;
            state.error=false
        },
        getProductSuccess:(state,action)=>{
            state.isFetching=false;
            state.error=false
            state.products=action.payload
        },
        getProductFailure:(state,action)=>{
            state.isFetching=false;
            state.error=true
            
        },
        //Delete
        deleteProductStart:(state)=>{
            state.isFetching=true;
            state.error=false
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products= action.payload/*state.products.splice(
                state.products.findIndex((item) => item._id === action.payload._id),
                1
              );*/
          },
        deleteProductFailure:(state,action)=>{
            state.isFetching=false;
            state.error=true
            
        },
        //Update
        updateProductStart:(state)=>{
            state.isFetching=true;
            state.error=false
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products= action.payload/*state.products.splice(
                state.products.findIndex((item) => item._id === action.payload._id),
                1
              );*/
          },
        updateProductFailure:(state,action)=>{
            state.isFetching=false;
            state.error=true
            
        },
        //CREATE
        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          addProductSuccess: (state, action) => {
              const p=[];
            p.push(state.products)
            p.push(action.payload)
            state.isFetching = false;
            state.products=p;
          },
          addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
        },
      });
export const {getProductStart,getProductSuccess,getProductFailure,deleteProductStart,deleteProductSuccess,deleteProductFailure,updateProductStart,
updateProductSuccess,updateProductFailure,addProductStart,addProductSuccess,addProductFailure}=productSlice.actions
export default productSlice.reducer;