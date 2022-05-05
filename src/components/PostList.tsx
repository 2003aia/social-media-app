import { List, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import Post from "./Post";
import { TPost } from ".././types/types";
import { FormPost } from "./FormPost";

export default function PostList({ posts }: { posts: Array<TPost> }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "auto",
      }}
    >
      <FormPost />
      <List sx={{ paddingBottom: 7 }}>
        {posts?.map((post: any) => (
          <Post post={post} />
        ))}
      </List>
    </div>
  );
}
