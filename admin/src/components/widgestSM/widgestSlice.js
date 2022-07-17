import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/middleware/apiMiddleware";
import serviceEndpoints from "../../config/serviceEndpoints";
import { method } from "lodash";

const slice = createSlice({
  name: "leaders",
  initialState: {
    isLoading: false,
    Leaders:[],
  },

  reducers: {
    LeadersRequested: (leaders) => {
        leaders.isLoading = true;
        console.log("start")
      
    },
    LeadersRequestFailed: (leaders) => {
    
        leaders.isLoading = false;
        console.log("fail")
    },
    LeadersReceived: (leaders, action) => {
        leaders.isLoading = false;
        leaders.Leaders=action.payload;
     console.log("leader data",leaders.Leaders)
    },
  
  },
});

export const {
  LeadersReceived,
  LeadersRequestFailed,
  LeadersRequested
} = slice.actions;
export default slice.reducer;

export const getAllLeaders = () =>
  apiCallBegan({
    url: serviceEndpoints.leaders,
    method: "get",
    onStart: LeadersRequested.type,
    onSuccess: LeadersReceived.type,
    onError: LeadersRequestFailed.type,
  })
  

