import { useState, useEffect } from "react";
import { PostList } from "./PostList";
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { auth, db, firestore } from "../firebase";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const q = query(
      collection(firestore, "posts"),
      orderBy("created", "desc"),
      limit(10)
    );

    onSnapshot(q, (data) => {
      const list: any = [];
      data.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setPosts(list);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return <PostList posts={posts} />;
};
