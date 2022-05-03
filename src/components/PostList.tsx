import { List, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import Post from "./Post";
import { TPost } from ".././types/types";
interface iPosts {
  text: string;
  id: string;
}

export default function PostList({
  index,
  currentId,
  posts,
}: {
  index?: number;
  currentId?: number;
  posts: Array<TPost>;
}) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "auto",
      }}
    >
      <List sx={{ paddingBottom: 7 }}>
        {posts?.map((post: any) => (
          <Post post={post} />
        ))}
      </List>
    </div>
  );
}
