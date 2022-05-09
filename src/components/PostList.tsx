import { List, Toolbar } from "@mui/material";
import React, { useState, useEffect, FC } from "react";
import Post from "./Post";
import { TPost } from ".././types/types";
import { FormPost } from "./FormPost";


interface iPostList {
  posts: Array<TPost>;
}

export const PostList: FC<iPostList> = ({ posts }) => {
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
        {posts?.map((post: TPost) => (
          <Post post={post} key={post.created} />
        ))}
      </List>
    </div>
  );
};
