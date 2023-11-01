import React from 'react'
import { Link } from 'react-router-dom'
import {styled} from "styled-components"
const Navbar = () => {
  return (
    <DIV>
        <Link to={"/home"}>Home</Link>
        <Link to={"/post"}>Post</Link>
        <Link to={"/add-post"}>Add Post</Link>
        <Link to={"/signup"}>SignUp</Link>
        <Link to={"/login"}>Login</Link>
    </DIV>
  )
}

export default Navbar

const DIV=styled.div`
display: flex;
justify-content: space-around;

background-color: black;
a{
    color: white;
    padding: 5px;
    font-size: 18;
    text-transform: uppercase;
    text-decoration: none;
}
a:hover{
    color: yellow;
}
`