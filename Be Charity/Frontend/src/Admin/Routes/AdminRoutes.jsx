import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AdminUsers from "../Pages/AdminUsers";
import AdminCategories from "../Pages/AdminCategories";
import AdminEvents from "../Pages/AdminEvents";

const AdminRoutes = ({ admin }) => {
  return (
    <div>
      <Routes>
        <Route path="/admin/dashboard/" element={<Dashboard />}></Route>
        <Route path="/admin/users/" element={<AdminUsers />}></Route>
        <Route path="/admin/category/" element={<AdminCategories />}></Route>
        <Route path="/admin/events/" element={<AdminEvents />}></Route>
        <Route path="/admin/settings/"></Route>
      </Routes>
    </div>
  );
};

export default AdminRoutes;
