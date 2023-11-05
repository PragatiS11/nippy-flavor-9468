import axios from "axios";
import { UserDataRequest } from "../../Utilis/api";

export const getUsers=(data)=>(dispatch)=>{
   dispatch({type:"userRequest"})
   console.log("data recieved ",data);
  dispatch({type:"userSuccesssfull",payload:data})
}

export const getSingleUser=(data)=>(dispatch)=>{
      dispatch({type:"singleUser_Success",payload:data})
}


export  const deleteUser=(id,allusers)=>(dispatch)=>{
    axios.delete(`https://wood-heart-api.onrender.com/user/${id}`)
    .then(res=>{
      allusers=allusers.filter((ele)=>{
         return ele.id!==id;
         
      })
      dispatch({type:"userDelete",payload:allusers});
    })
    .catch(err=>{
      console.log(err);
    })
}

// donations from singleuser.