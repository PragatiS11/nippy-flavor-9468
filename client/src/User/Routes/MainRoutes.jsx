import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Donate from "../Pages/Donate";
import Voluntears from "../Pages/Voluntears";

import Adminpage from "../../Admin/Pages/Adminpage";

import ThankYou from "../Pages/Thankyou";
import SingleDonationPage from "../Pages/SingleDonationPage";
import UserProfile from "../Pages/UserProfile";
import ResetPassword from "../Pages/ResetPassword";
import ResetPasswordEmail from "../Pages/ResetPasswordEmail";
import { VolunteerDonation } from "../Pages/VolunteerDonation";
import { AdminPrivateRouter, VolunteerPrivateRouter } from "./PrivateRouter";

const MainRoutes = () => {
  return (
    <div>


       <Routes>
           <Route path="/admin" element={
        
<Adminpage />
        
           }></Route>
            <Route path='/' element={<HomePage />} />
     
            <Route path='/thankyou' element={<ThankYou />} />
     
            <Route path='/donate-us/:id' element={<SingleDonationPage />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/donate-us' element={<Donate />} />
            <Route path='/volunteers' element={<Voluntears />} />
            <Route path='/volunteers/donation' element={
      
              <VolunteerDonation/>
     
            } />
            
            <Route path='/contact' element={<Contact />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path="/user-profile/reset-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU0MzljNzNkODEwZjU2NmIyZTQwNGZjIiwidXNlcm5hbWUiOiJTaHViaGFtIiwiaWF0IjoxNjk4OTMyMjEzfQ.1QDUsrLJZDFuXT5IamFfvEa0LH7FY0q_XknJpEw0KkQ"
    element={<ResetPassword />}   />
          <Route path="/user-profile/reset-password" element={<ResetPasswordEmail />}/>
         </Routes>
   

    </div>
  );
};

export default MainRoutes;
