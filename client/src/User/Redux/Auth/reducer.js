import Cookies from "js-cookie";
import { AUTH_FAILURE, AUTH_LOGOUT_SUCCESS, AUTH_REQUEST, AUTH_SUCCESS, AUTH_SUCCESS_MSG, GET_SINGLE_USER_DATA } from "../actionTypes";

let User_token=Cookies.get("User-token") || "";

let initialState={
isAuth:User_token?true:false,
isAdmin:false,
isVolunteers:false,
loginMessage:"",
logoutMessage:"Logged out Successfully.",
isLoading:false,
isError:false,
userData:{},
token:User_token,
isAdmin:false
}


export const reducer = (state= initialState,action ) => {
  const {type,payload}=action;
    switch (type) {
      case AUTH_REQUEST:{
        return {
          ...state,
          isLoading:true
        }
      }
      case AUTH_SUCCESS: {
        return {
          ...state,
          loginMessage:payload.msg,
token:payload.token || false,
isAuth:true,
isLoading:false,
isError:false
        };
      }
      case AUTH_FAILURE: {
        return {
          ...state,
          isError:true 
        };
      }
      case AUTH_LOGOUT_SUCCESS:{
        return {
          ...state,
          isAuth:false,
          loginMessage:"",
          userData:{},
          logoutMessage:payload,
isLoading:false,
isError:false,
token:""
        }
      }
      case AUTH_SUCCESS_MSG:{
        return {
          ...state,
          loginMessage:payload,
isLoading:false,
isError:false
        };
      }
      case GET_SINGLE_USER_DATA:{
        return {
          ...state,
          userData:payload
        }
      }
      default:
        return state; 
    }
  };
  
  export default reducer;
  