import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const AdminPrivateRouter = ({ children }) => {
    const data=useSelector((store)=>(store.AuthReducer.isAdmin))

  return <div>{data? children : <Navigate to="/" />}</div>;
};



const VolunteerPrivateRouter = ({ children }) => {
    const data=useSelector((store)=>(store.AuthReducer.userData))
console.log(data)
  return <div>{data?.isVolunteers ? children : <Navigate to="/" />}</div>;
};

export {AdminPrivateRouter,VolunteerPrivateRouter};