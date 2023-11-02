
let ans=localStorage.getItem("isAuth");

let initialState={
isAuth:ans=="true"?true:false,
isLoading:false,
isError:false,
token:localStorage.getItem("token") || "",
isAdmin:false
}

// Create the reducer with types
export const reducer = (
    state= initialState,
    action // Replace 'any' with the actual type of payload
  ) => {
    switch (action.type) {
      case AUTH_SUCCESS: {
        return {
          ...state,
token:action.payload,
isAuth:true,
isLoading:false,
isError:false
        };
      }
      case AUTH_FAILURE: {
        return {
          ...state,
          isError:true // Use type assertion or handle the actual conversion
        };
      }
      case AUTH_LOGOUT_SUCCESS:{
        return {
          ...state,
          isAuth:false,
isLoading:false,
isError:false,
token:""
        }
      }
      default:
        return state; // Return the state as is for unknown actions
    }
  };
  
  export default reducer;
  