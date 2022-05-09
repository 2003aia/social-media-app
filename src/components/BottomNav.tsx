import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useWindowDimensions } from "../hooks/window";
import { Home, SettingsInputComponent } from "@mui/icons-material";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const { width } = useWindowDimensions();
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  return (
    <>
      {width <= 800 && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => {
              navigate("/");
            }}
            icon={<Home />}
          />

          <BottomNavigationAction
            onClick={() => {
              navigate("/");
            }}
            icon={<ChatIcon />}
          />
          <BottomNavigationAction
            onClick={() => {
              navigate("/profile");
            }}
            icon={<PersonIcon />}
          />
        </BottomNavigation>
      )}
    </>
  );
};
