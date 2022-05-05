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
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const newCommentHandler = async (data: any) => {
    const mesRef = doc(collection(firestore, `posts/${post.id}/comments`));
    const postRef = doc(firestore, `posts`, post.id);
    await setDoc(mesRef, {
      author_avatar: user?.avatar !== undefined ? user.avatar : null,
      author_id: auth.currentUser?.uid,
      author_nickname: user.name,
      message: data.message,
      created: new Date().toISOString(),
    });
    await updateDoc(postRef, {
      totalMessages: increment(1),
    }).then(() => setMessage(""));
  };

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
              error={errors.message && true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar src={user?.avatar} sx={{ width: 25, height: 25 }}>
                      {user?.name?.charAt(0)}
                    </Avatar>
                  </InputAdornment>
                ),
              }}
              {...register("message", { required: true })}
              fullWidth={true}
              style={{ marginLeft: 10 }}
              label="new comment"
              variant="standard"
              helperText={errors.message && "заполните поле"}
            />

            <IconButton onClick={handleSubmit(newCommentHandler)}>
              <EditIcon />
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
