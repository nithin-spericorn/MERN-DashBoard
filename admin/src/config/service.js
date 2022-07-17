import axios from "axios";
//import { createBrowserHistory } from "history";
//import { isEmpty } from "lodash";

//const history = createBrowserHistory({ forceRefresh: true });

const appGateway = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 50000,
});

/*amzStealsGateway.interceptors.response.use((res) => {
  console.log({ res });
  if (!res.data.success) {
    if (res.data.message === "Unauthorized Access") {
      history.push("/");
    }
  }
  return res;
});
amzStealsGateway.interceptors.request.use((config) => {
  let token;

  token = sessionStorage.getItem("access_token");

  if (token)
    config.headers = { ...config.headers, Authorization: `${token}` };
  return config;
});*/

export default appGateway;
