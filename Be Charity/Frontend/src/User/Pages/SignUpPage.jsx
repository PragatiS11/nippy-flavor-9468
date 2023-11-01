import React, { useState } from "react";
import axios from "axios"
const SignUpPage = () => {
  const initial = {
    name: "",
    email: "",
    gender:"",
    password: "",
    age:0,
    city: "",
    is_married:false
  };

  const [form,setForm]=useState(initial);

  const handleCheck=(e)=>{
    
    setForm({...form,[e.target.name]:e.target.checked})
      }
  const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.type=="number"?+e.target.value:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
        axios.post("http://localhost:3000/users/register",form).then(res=>{alert(res.data.msg)
      console.log(res.data)
      });
       
    setForm(initial);
    
  }

  const {name,email,gender,password,age,city,is_married}=form;

  return (
    <div>
      <h1>Sign-Up Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={name} placeholder="Enter Your name" />
        <br />
        <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange}  value={email}/>
        <br />
        <select value={gender} name="gender" onChange={handleChange} >
          <option value="">Select Gender</option>
          <option value="Male">MALE</option>
          <option value="Female">FEMALE</option>
        </select>
        <br />
        is Married:
        <input type="checkbox" checked={is_married} name="is_married" onChange={handleCheck} >
  
        </input>
        <br />
        Age :
        <input type="number" onChange={handleChange}  value={age} name="age" placeholder="Enter Your Age" />
        <br />
        <input type="text" onChange={handleChange}  value={city} name="city" placeholder="Enter Your City" />
        <br />
        <input type="password" onChange={handleChange}  value={password} name="password" placeholder="Enter Your Password" />
        <br />
        
      
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default SignUpPage;
