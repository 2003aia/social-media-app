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

import { TComment, TPost } from "../types/types";
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
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const style = {
  width: "100%",

  height: "100%",

  bgcolor: "#eee",
  boxShadow: 0,
  p: 1,
};

interface iCommentList {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
  post: TPost;
  comments: Array<TComment>;
}

export const CommentList: FC<iCommentList> = ({
  open,
  setOpen,
  id,
  post,
  comments,
}) => {
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState({ message: "" });
  const user = useAppSelector((data) => data.post.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const newCommentHandler = async (data: any) => {
    const mesRef = doc(collection(firestore, `posts/${post.id}/comments`));
    const postRef = doc(firestore, `posts`, post.id);
    await setDoc(mesRef, {
      author_avatar: user?.avatar !== undefined ? user.avatar : null,
      author_id: auth.currentUser?.uid,
      author_nickname: user.name,
      message: data.message,
      created: new Date().toISOString(),
    }).then(() => {
      reset({ message: "" });
    });
    await updateDoc(postRef, {
      totalMessages: increment(1),
    });
  };

  return (
    /*  <Modal
      open={open}
      sx={{ zIndex: 200000 }}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    > */
    <>
      {open && (
        <Paper sx={style}>
          {/* <Post post={post} /> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
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
              placeholder="Comment"
              helperText={errors.message && "заполните поле"}
            />

            <IconButton onClick={handleSubmit(newCommentHandler)}>
              <EditIcon />
            </IconButton>
          </div>
          <List
          /*  sx={{
              bgcolor: "background.paper",
              
            }} */
          >
            {comments.map((comment: TComment) => (
              <Comment key={comment?.created} comment={comment} post={post} />
            ))}
          </List>
        </Paper>
      )}
    </>

    /*   </Modal> */
  );
};
