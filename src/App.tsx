import React, { useState, useEffect, Fragment } from "react";
import { auth, db, firestore } from "./firebase";
import { PostList } from "./components/PostList";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Signin } from "./components/Signin";
import { Sidebar } from "./components/Sidebar";
import { BottomNav } from "./components/BottomNav";
import "./App.css";
import { SidebarWidgets } from "./components/SidebarWidgets";
import { Profile } from "./components/Profile";
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { postData, setRefresh } from "./redux/post";
import MessageList from "./components/MessageList";
import { useWindowDimensions } from "./hooks/window";
import { Header } from "./components/Header";
import { useAppSelector } from "./redux/hooks";
import { Home } from "./components/Home";

function App() {
  const { width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const { refresh, user } = useAppSelector((data) => data.post);
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUser = async () => {
    const id = auth.currentUser?.uid;

    onSnapshot(doc(firestore, "users", `${id}`), (doc): any => {
      const { created, birthDate }: any = doc?.data();
      let birthVal = new Date(birthDate).toDateString();
      let createdVal = new Date(created).toDateString();
      if (doc.exists()) {
        dispatch(
          postData({
            ...doc.data(),
            id: doc.id,
            birthDate: birthVal,
            created: createdVal,
          })
        );
      }
    });
  };

  useEffect(() => {
    if (auth.currentUser !== null) {
      fetchUser();
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [auth.currentUser]);

  return (
    <div className="app">
      <Sidebar visible={visible} setVisible={setVisible} />

      <div className="main">
        <Header />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<Signin />} path="/login" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<MessageList />} path="/messages" />
        </Routes>
      </div>

      <SidebarWidgets />
      <BottomNav />
    </div>
  );
}

export default App;
