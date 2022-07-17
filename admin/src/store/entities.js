import { combineReducers } from "@reduxjs/toolkit";
import ticketReducer from "../components/FeaturedInfo/FeaturedInfoSlice";
import leaderReducer from "../components/widgestSM/widgestSlice"


const entitiesReducer = combineReducers({
  tickets:ticketReducer,
  leaders:leaderReducer
  
});

export default entitiesReducer;
