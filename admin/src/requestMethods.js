import axios from "axios";

const BASE_URL = "http://localhost:8181/api/";
const TOKEN =
JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.data.token;
    //.accessToken ;
    console.log("my",JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.data.token )

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },

});