import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import {
  Button,
  ListItemText,
  ListItemIcon,
  ListItem,
  Toolbar,
  List,
} from "@mui/material";
import { Home, SettingsInputComponent } from "@mui/icons-material";
import "./Sidebar.css";
import { useWindowDimensions } from "../hooks/window";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonIcon from "@mui/icons-material/Person";

export const Sidebar = ({ visible, setVisible, open, setOpen }: any) => {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  const signOutHandler = (index: number) => {
    if (index == 2) auth.signOut();
    console.log(index, "index");
  };

  return (
    <List className="sidebar">
      <Toolbar>
        <ListItem>
          <ListItemIcon>
            <FlutterDashIcon fontSize="large" />
          </ListItemIcon>
        </ListItem>
      </Toolbar>

      <ListItem onClick={() => navigate("/")} button key={"/"}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>

        <ListItemText primary="Home" />
      </ListItem>

      <ListItem onClick={() => navigate("/login")} button key={"/login"}>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>

        <ListItemText primary="Messages" />
      </ListItem>
      <ListItem onClick={() => navigate("/")} button key={"/"}>
        <ListItemIcon>
          <BookmarksIcon />
        </ListItemIcon>

        <ListItemText primary="Bookmarks" />
      </ListItem>
      <ListItem onClick={() => navigate("/")} button key={"/"}>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>

        <ListItemText primary="Lists" />
      </ListItem>
      <ListItem onClick={() => navigate("/profile")} button key={"/profile"}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>

        <ListItemText primary="Profile" />
      </ListItem>

      <ListItem>
        <Button variant="contained" color="primary" fullWidth>
          new post
        </Button>
      </ListItem>
    </List>
  );
};
