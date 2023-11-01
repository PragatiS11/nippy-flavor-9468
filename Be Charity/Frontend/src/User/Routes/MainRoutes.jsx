import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Donate from '../Pages/Donate'
import Voluntears from '../Pages/Voluntears'
const MainRoutes = () => {
  return (
    <div>
       <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/donate-us' element={<Donate />} />
            <Route path='/voluntears' element={<Voluntears />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default MainRoutes