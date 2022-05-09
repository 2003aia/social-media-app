import React, { useState, useEffect, Fragment } from "react";
import "./Header.css";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useWindowDimensions } from "../hooks/window";

export const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <Toolbar
        sx={{
          position: "fixed",
          zIndex: 1,
          maxWidth: 800,
          background: "#fff",
          minWidth: 300,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div">
          {location.pathname === "/"
            ? "HOME"
            : "profile"
            ? "PROFILE"
            : "login"
            ? "LOGIN"
            : ""}
        </Typography>
      </Toolbar>
    </div>
  );
};
