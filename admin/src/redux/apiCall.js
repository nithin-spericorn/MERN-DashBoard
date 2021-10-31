import { loginFailure,loginStart,loginSuccess} from "./UserRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductStart,deleteProductSuccess,deleteProductFailure, getProductFailure, getProductStart, getProductSuccess, 
  updateProductStart, 
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure} from "./productRedux";

export const login = async (dispatch, user) => {   //user=>{email:"abc",password:"***"}
    console.log(user)  // i got user=>{email:"abc",password:"***"}
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user); //usingg axios
    dispatch(loginSuccess(res));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const getProducts = async (dispatch) => {   
 
dispatch(getProductStart());
try {
  const res = await publicRequest.get("/products")
  dispatch(getProductSuccess(res));
} catch (err) {
  dispatch(getProductFailure());
}
};

export const deleteProducts = async (id,dispatch) => {   
   console.log("delete",id)
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`)
    console.log(res)
    dispatch(deleteProductSuccess(res));
  } catch (err) {
    console.log(err)
    dispatch(deleteProductFailure());
  }
  };

  export const updateProducts = async (id,product,dispatch) => {   
    console.log("delete",id)
   dispatch(updateProductStart());
   try {
     const res = await userRequest.put(`/products/${id}`)
     console.log(res)
     dispatch(updateProductSuccess(res));
   } catch (err) {
     console.log(err)
     dispatch(updateProductFailure());
   }
   };
   export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products/create`, product);
      console.log(res.data,"res.data")
      console.log(product)
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };