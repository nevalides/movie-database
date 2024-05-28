import { useCallback, useReducer } from "react";
import service from "../service/index";
import { ACC_LANG, API_KEY } from "../config/config";

const initialState = {
  data: null,
  status: "idle",
  error: null,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_REQUEST":
      return {
        ...state,
        error: null,
        status: "pending",
        loading: true,
      };
    case "GET_REQUEST_SUCCESS":
      return {
        ...state,
        ...action.payload,
        data: action.payload.data,
        status: "resolved",
        loading: false,
      };
    case "GET_REQUEST_FAILURE":
      return {
        ...state,
        status: "rejected",
        error: action.payload,
        loading: false,
      };
    default:
      throw new Error(`There is no action type : ${action.type}`);
  }
}

export const useFetch = (url, queryParams, mapData) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(() => {
    dispatch({ type: "GET_REQUEST" });
    service
      .get(url, {
        params: {
          ...queryParams,
          language: ACC_LANG,
          api_key: API_KEY,
        },
      })
      .then(({ data }) => {
        dispatch({ type: "GET_REQUEST_SUCCESS", payload: mapData(data) });
      })
      .catch((e) => {
        dispatch({ type: "GET_REQUEST_FAILURE", payload: e });
      });
  }, [url, queryParams, mapData]);

  return { ...state, params: queryParams, mapData, fetchData };
};
