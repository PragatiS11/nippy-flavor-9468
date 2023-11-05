import axios from "axios";
import { LoginRequest, LogoutRequest, UserDataRequest } from "../../Utilis/api";
import { AUTH_FAILURE, AUTH_LOGOUT_SUCCESS, AUTH_REQUEST, AUTH_SUCCESS, AUTH_SUCCESS_MSG, GET_SINGLE_USER_DATA } from "../actionTypes";
import Cookies from "js-cookie";

export const SingleUserData=(dispatch)=>{
    
    dispatch({type:AUTH_REQUEST})
    UserDataRequest().then(res=>{
        dispatch({type:GET_SINGLE_USER_DATA,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:AUTH_FAILURE})
    })

}

export const LoginUser=(obj)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
    dispatch({type:AUTH_REQUEST})

   LoginRequest(obj).then(res=>{

    dispatch({type:AUTH_SUCCESS_MSG,payload:res.data.msg})
      
if(res.data.token){
    dispatch({type:AUTH_SUCCESS,payload:res.data})
    Cookies.set("User-token",res.data.token)
    UserDataRequest().then(res=>{
        dispatch({type:GET_SINGLE_USER_DATA,payload:res.data})
    })
}
resolve(res.data.msg)  ;
    })
    .catch(()=>{
        dispatch({type:AUTH_FAILURE})
    })
})
}

export const LogoutUser=(dispatch)=>{
    dispatch({type:AUTH_REQUEST})
   LogoutRequest().then(res=>{

        dispatch({type:AUTH_LOGOUT_SUCCESS,payload:res.data.msg})
        Cookies.remove("User-token")
    })
    .catch(()=>{
        dispatch({type:AUTH_FAILURE})
    })
}


