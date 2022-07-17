import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../store/middleware/apiMiddleware";
import serviceEndpoints from "../../config/serviceEndpoints";
import { method } from "lodash";

const slice = createSlice({
  name: "tickets",
  initialState: {
    isLoading: false,
    responsedata:[],
  },

  reducers: {
//     TicketCreateRequest:(tickets)=>{
// tickets.isLoading=true;
//     },
    TicketCreateRequestFaild:(tickets)=>{
      tickets.isLoading=false;
          },
          TicketCreateRequestSuccess:(tickets,action)=>{
            tickets.isLoading=false;
                },
    TicketRequested: (tickets) => {
      tickets.isLoading = true;
      
    },
    TicketRequestFailed: (tickets) => {
    
      tickets.isLoading = false;
     
    },
    TicketReceived: (tickets, action) => {
      tickets.isLoading = false;
     tickets.responsedata=action.payload;
     console.log("data",tickets.responsedata)
    },
  
  },
});

export const {
  TicketRequested,
  TicketRequestFailed,
  TicketReceived,
  //TicketCreateRequest,
  TicketCreateRequestFaild,
  TicketCreateRequestSuccess
} = slice.actions;
export default slice.reducer;

export const getAllTickets = () =>
  apiCallBegan({
    url: serviceEndpoints.tickets,
    method: "get",
    onStart: TicketRequested.type,
    onSuccess: TicketReceived.type,
    onError: TicketRequestFailed.type,
  })
  export const createTickets = () =>  
  apiCallBegan({
    url: serviceEndpoints.tickets,
    method: "post",
    onStart: TicketRequested.type,
    onSuccess: TicketCreateRequestSuccess.type,
    onError: TicketRequestFailed.type,
  });

