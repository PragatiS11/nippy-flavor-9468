import axios from "axios";

export const getUsers=()=>(dispatch)=>{
   dispatch({type:"userRequest"})
         axios.get("https://wood-heart-api.onrender.com/user")
         .then(res=>{
            console.log(res.data)
            dispatch({type:"userSuccesssfull",payload:res.data})
         })
         .catch(err=>{
            console.log(err);
         })
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
