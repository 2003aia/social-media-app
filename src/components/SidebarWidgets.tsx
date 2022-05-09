import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import "../App.css";
import { auth, firestore } from "../firebase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {PostList} from "./PostList";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { Container, IconButton, InputAdornment } from "@mui/material";
import { TPost } from "../types/types";
import { Search, Clear } from "@mui/icons-material";
import { useWindowDimensions } from "../hooks/window";
import "./Sidebar.css";

export const SidebarWidgets = () => {
  const [text, setText] = useState<string>("");
  const [posts2, setPosts2] = useState<Array<TPost>>([]);
  useEffect(() => {
    const q = query(
      collection(firestore, "posts"),
      where("text", "==", text),
      orderBy("created", "desc"),
      limit(10)
    );

    onSnapshot(q, (data) => {
      const list: any = [];
      data.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setPosts2(list);
    });
  }, [text]);

  return (
    <List className="sidebarWidgets">
      <ListItem>
        <TextField
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
          fullWidth={true}
          id="input-with-icon-textfield"
          label="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {text.length > 0 ? (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => {
                        setText("");
                      }}
                    >
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                ) : null}
              </>
            ),
          }}
          variant="standard"
        />
      </ListItem>
      <div className="sidebarWidgets-main">
        {posts2.length > 0 ? (
            <PostList posts={posts2} />
        ) : (
          <p>type something...</p>
        )}
      </div>
    </List>
  );
};
