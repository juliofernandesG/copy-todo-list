import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { motion } from "framer-motion";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { useAuth } from "../context/authContext";
import Login from "../pages/Login";
import BuildWthLove from "./BuildWthLove";
import Register from "../pages/Register"; // Importe o componente Register

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-dark-500 dark:text-white min-h-screen">
      {user && (
        <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
      <motion.div className="flex gap-2 mx-auto w-full ">
        {openSidebar && <Sidebar />}
        <motion.main layout className={user && "w-full mt-14  pb-10"}>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" replace />}
            />
            <Route path="/task/:taskID" element={user ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </motion.div>
      <BuildWthLove />
    </div>
  );
};

export default App;
