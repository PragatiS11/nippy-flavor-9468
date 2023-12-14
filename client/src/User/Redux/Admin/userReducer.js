
const initialState={
  isLoading:false,
  isAuth:false,
  users:[],
  singleUser:{}
}

export const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
       case "userSuccesssfull":{
          return { isLoading:false,
  isAuth:false,
  users:payload}
       }
       case "userRequest":{
         return { isLoading:true,
  isAuth:false,
  users:[]}
       }
       case "userDelete":{
        return {isLoading:true,
  isAuth:false,
  users:payload}
       }
      //  ===============single user
      case "singleUser_Success":{
        console.log(payload,{isLoading:false,isAuth:false,singleUser:payload})
        return {isLoading:false,isAuth:false,singleUser:payload}
      }
        default:{
            return state
        }
    }
}
