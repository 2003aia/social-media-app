import React, { useState, useEffect, Fragment } from "react";
import { auth, db, firestore } from "./firebase";
import PostList from "./components/PostList";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Signin } from "./components/Signin";
import { Sidebar } from "./components/Sidebar";
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
import { useDispatch } from "react-redux";
import { postData } from "./redux/post";
import MessageList from "./components/MessageList";
import { Container } from "@mui/material";
import { useWindowDimensions } from "./hooks/window";
import { Header } from "./components/Header";

function App() {
  const [currentId, setCurrentId] = useState<number>(3);
  const [index, setIndex] = useState<number>(0);
  const { height, width } = useWindowDimensions();
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("created", "desc"),
      limit(10)
    );

    onSnapshot(q, (data) => {
      const list: any = [];
      data.forEach((doc) => {
        console.log(doc.data().text, "doc");
        list.push({ ...doc.data(), id: doc.id });
      });
      console.log(list, "list");
      setPosts(list);
    });
    const fetchUser = async () => {
      if (auth.currentUser?.uid !== undefined) {
        const id = auth.currentUser?.uid;
        const userDoc = doc(firestore, "users", id);

        const userSnap: any = await getDoc(userDoc);
        console.log(userSnap.data(), "usersnap");
        if (userSnap.exists()) {
          dispatch(postData(userSnap.data()));
        }
      }
    };

    fetchUser();
  }, [auth.currentUser?.uid]);

  useEffect(() => {
    if (auth.currentUser !== null) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [auth.currentUser]);

  return (
    <div
      style={{
        width: "100%",
        minWidth: 300,
        maxWidth: 1300,
        margin: "auto",
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar visible={visible} setVisible={setVisible} />

      <div
        style={{
          width: "100%",
          minWidth: 300,
          maxWidth: 800,
          height: "100%",
          overflow: "hidden",
          background: "#eee",
        }}
      >
        <Header />
        <Toolbar />
        <Routes>
          <Route
            path="/"
            element={
              <PostList posts={posts} currentId={currentId} index={index} />
            }
          />

          <Route element={<Signin />} path="/login" />
          <Route element={<Profile posts={posts} />} path="/profile" />
          <Route element={<MessageList />} path="/messages" />
        </Routes>
      </div>

      <SidebarWidgets posts={posts} currentId={currentId} index={index} />
    </div>
  );
}

export default App;
