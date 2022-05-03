import {
  Avatar,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Tooltip,
  List,
  InputAdornment,
} from "@mui/material";
import React, { useState, useEffect, FC } from "react";
import Post from "./Post";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TPost } from "../types/types";
import {
  collection,
  doc,
  getDoc,
  increment,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { auth, firestore } from "../firebase";
import { setSyntheticLeadingComments } from "typescript";
import { Comment } from "./Comment";
import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { AccountCircle } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

/* type TPost = {
    avatar?: string,
    text?: string,
    likes: Array<string>,
    created: string,
    author_nickname: string,
    image_name?: string,
    image_url?: string,
    user_id: string,
} */

interface iCommentList {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
  post: TPost;
}

export const CommentList: FC<iCommentList> = ({ open, setOpen, id, post }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const user = useAppSelector((data) => data.post.user);

  useEffect(() => {
    const q = query(
      collection(firestore, `posts/${post.id}/comments`),
      /* orderBy('createdAt', 'desc'), */ limit(10)
    );

    onSnapshot(q, (data) => {
      const list: any = [];
      data.forEach((doc) => {
        console.log(doc.data().text, "doc");
        list.push({ ...doc.data(), id: doc.id, post: post });
      });
      setComments(list);
    });
  }, []);

  return (
    <div
      style={{
        marginTop: 30,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        overflow: "auto",
        alignItems: "start",
      }}
    >
      <Modal
        open={open}
        sx={{ zIndex: 200000 }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Post post={post} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: 20,
            }}
          >
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar src={user?.avatar} sx={{ width: 25, height: 25 }}>
                      {user?.nickname?.charAt(0)}
                    </Avatar>
                  </InputAdornment>
                ),
              }}
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              fullWidth={true}
              style={{ marginLeft: 10 }}
              label="create message"
              variant="standard"
              name="create"
            />
            <IconButton
              onClick={async () => {
                const mesRef = doc(
                  collection(firestore, `posts/${post.id}/comments`)
                );
                const postRef = doc(firestore, `posts`, post.id);
                await setDoc(mesRef, {
                  author_avatar: user?.avatar !== undefined ? user.avatar : null,
                  author_id: auth.currentUser?.uid,
                  author_nickname: user.nickname,
                  message: message,
                  created: new Date().toISOString(),
                });
                await updateDoc(postRef, {
                  totalMessages: increment(1),
                }).then(() => setMessage(""));
              }}
            >
              {message !== "" ? (
                <Tooltip title="save">
                  <CheckIcon />
                </Tooltip>
              ) : (
                <Tooltip title="create">
                  <EditIcon />
                </Tooltip>
              )}
            </IconButton>
          </div>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              marginTop: -2,
            }}
          >
            {comments.map((comment) => (
              <Comment comment={comment} post={post} />
            ))}
          </List>
        </Paper>
      </Modal>
      {/*   {posts?.map((post: any) => (
      <Post post={post} />
    ))} */}
    </div>
  );
};
