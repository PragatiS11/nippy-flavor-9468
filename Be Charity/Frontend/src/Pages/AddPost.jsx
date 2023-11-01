import React, { useState } from 'react'
import axios from "axios"

const AddPosts = () => {

    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")

    const handleSubmit=(e)=>{
e.preventDefault();
const newData={
   title,
   body
}
console.log(newData);
axios.post("https://lemon-termite-hem.cyclic.app/posts/add",newData,
{headers:
{authorization:`Bearer ${localStorage.getItem("token")}`}
})
.then((res)=>alert(res.data.message))
.catch((res)=>alert("error"));

setTitle("");
setBody("");
    }

  return (
    <div>CREATE YOUR POST
        <form onSubmit={handleSubmit}>
       
           <input type="text" placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)} /> <br />
           <textarea type="text" value={body} placeholder='enter body' onChange={(e)=>setBody(e.target.value)} /> <br />
           <input type="submit" />
        </form>
    </div>
  )
}

export default AddPosts