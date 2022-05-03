import React, { useState, useEffect, Fragment } from "react";
import "./Header.css";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useWindowDimensions } from "../hooks/window";

export const Header = () => {
  const { height, width } = useWindowDimensions();

  const [visible, setVisible] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="header">
      <Toolbar
        sx={{
          position: "fixed",
          zIndex: 1000,
          maxWidth: 800,
          background: "#fff",
          minWidth: 300,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div">
          Home
        </Typography>
        <Typography variant="h6" component="div">
          Home
        </Typography>
      </Toolbar>
    </div>
  );
};
