import { createAction } from "@reduxjs/toolkit";
import appGateway from "../../config/service";

export const apiCallBegan = createAction("api/apiCallBegan");
export const apiCallSuccess = createAction("api/apiCallSuccess");
export const apiCallFailed = createAction("api/apiCallFailed");

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    console.log("action",action)
    if (action.type !== apiCallBegan.type) {
      return next(action);
    }

    const { onStart, onSuccess, onError, method, url, data } = action.payload;

    if (onStart) {
      dispatch({ type: onStart });
    }

    next(action);

    try {
      const apiCallResponse = await appGateway.request({
        url,
        method,
        data,
      });

      console.log({ apiCallResponse });

      dispatch(apiCallSuccess(apiCallResponse));
      if (onSuccess) {
        console.log("ee")
        dispatch({
          type: onSuccess,
          payload: apiCallResponse.data,
        });
      }
    } catch (error) {
      dispatch(apiCallFailed(error.message));
      if (onError) {
        dispatch({
          type: onError,
          payload: error.message,
        });
      }
    }
  };

export default api;
