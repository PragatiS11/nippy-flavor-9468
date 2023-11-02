import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Donate from "../Pages/Donate";
import Voluntears from "../Pages/Voluntears";
import PaymentPage from "../Components/PaymentPage";
import Adminpage from "../../Admin/Pages/Adminpage";

const MainRoutes = () => {
  return (
    <div>


       <Routes>
           <Route path="/admin" element={<Adminpage />}></Route>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/donate-us' element={<Donate />} />
            <Route path='/volunteers' element={<Voluntears />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/payment" element={<PaymentPage />}/>
         </Routes>

    </div>
  );
};

export default MainRoutes;
