import React, { memo } from "react";
import { Outlet } from "react-router-dom";

// // static import
import NavBar from "../components/navBar/NavBar";
import TopBar from "../components/topBar/TopBar";

function MainLayouts({ isAuthenticated }) {
  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <TopBar />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default memo(MainLayouts);
