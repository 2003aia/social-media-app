import "../App.css";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <ListItem button key={"/"}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>

          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/login">
        <ListItem button key={"/login"}>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>

          <ListItemText primary="Messages" />
        </ListItem>
      </Link>
      <Link to="/">
        <ListItem button key={"/"}>
          <ListItemIcon>
            <BookmarksIcon />
          </ListItemIcon>

          <ListItemText primary="Bookmarks" />
        </ListItem>
      </Link>
      <Link to="/">
        <ListItem button key={"/"}>
          <ListItemIcon>
            <FormatListBulletedIcon />
          </ListItemIcon>

          <ListItemText primary="Lists" />
        </ListItem>
      </Link>
      <Link to="/profile">
        <ListItem button key={"/profile"}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>

          <ListItemText primary="Profile" />
        </ListItem>
      </Link>

      <ListItem>
        <Button variant="contained" color="primary" fullWidth>
          new post
        </Button>
      </ListItem>
    </List>
  );
};
