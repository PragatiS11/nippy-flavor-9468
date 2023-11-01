import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import PostPage from '../Pages/PostPage'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'
import AddPosts from '../Pages/AddPost'
const MainRoutes = () => {
  return (
    <div>
       <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/post' element={<PostPage />} />
            <Route path='/add-post' element={<AddPosts />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default MainRoutes