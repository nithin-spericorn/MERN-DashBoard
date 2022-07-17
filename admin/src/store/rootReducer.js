import { combineReducers } from "@reduxjs/toolkit";
//import authReducer from "../components/Auth/authSlice";
import entitiesReducer from "./entities";

const rootReducer = combineReducers({
  
  entities: entitiesReducer
});

export default rootReducer;
