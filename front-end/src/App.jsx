import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Layout } from "./layouts/Layout";
import { Home } from "./shared/Home";
import { Dashboard } from "./pages/admin/Dashboard";
import { ManageStudents } from "./pages/admin/ManageStudents";
import { ManageTeam } from "./pages/admin/ManageTeam";

import { PersisLogin } from "./pages/auth/PersisLogin";
import { ManageSubjects } from "./pages/admin/MannageSubjects";
import { ManageTeacher } from "./pages/admin/ManageTeacher";
import Profile from "./pages/admin/Profile";


function App() {
  return (
    <Routes>
      <Route path="/sign_in" element={<Login />} />

      <Route element={<PersisLogin />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/students" element={<ManageStudents />} />
          {/* <Route path="/admin/Subjects" element={<ManageSubjects />} /> */}
          <Route path="/admin/teachers" element={<ManageTeacher />} />
          <Route path="/admin/team" element={<ManageTeam />} />
          <Route path="/admin/subjects" element={<ManageSubjects />} />
          <Route path="/user/:id" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
