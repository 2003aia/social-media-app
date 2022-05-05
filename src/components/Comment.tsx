import { CircularProgress } from "@mui/material";
import React, { useState, useEffect, FC } from "react";
import { TPost, TComment } from "../types/types";
import { auth, firestore } from "../firebase";
import {
  setDoc,
  doc,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  increment,
} from "firebase/firestore";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Delete } from "@mui/icons-material";
import { useAppSelector } from "../redux/hooks";
import { async } from "@firebase/util";

interface iComment {
  comment: TComment;
  post: TPost;
}

export const Comment: FC<iComment> = ({ comment, post }) => {
  const user = useAppSelector((data) => data.post.user);
  const [loading, setLoading] = useState(false);

  const likeOrDelete = comment?.likes?.find(
    (d: any) => d == auth.currentUser?.uid
  );

  const likeHandler = async () => {
    if (comment.id !== undefined && auth.currentUser?.uid !== undefined) {
      if (likeOrDelete) {
        await setDoc(
          doc(firestore, `posts/${post.id}/comments`, comment.id),
          {
            likes: arrayRemove(auth.currentUser.uid),
          },
          { merge: true }
        );
      } else {
        await setDoc(
          doc(firestore, `posts/${post.id}/comments`, comment.id),
          {
            likes: arrayUnion(auth.currentUser.uid),
          },
          { merge: true }
        );
      }
    }
  };

  const deleteCommentHandler = async () => {
    if (comment.id !== undefined && auth.currentUser?.uid !== undefined) {
      setLoading(true);
      await setDoc(
        doc(firestore, `posts`, post.id),
        {
          totalMessages: increment(-1),
        },
        { merge: true }
      );
      await deleteDoc(
        doc(firestore, `posts/${post.id}/comments`, comment.id)
      ).then(() => setLoading(false));
    }
  };

  return (
    <div style={{ marginBottom: -10 }} key={comment.id}>
      <ListItem alignItems="flex-start" style={{}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={comment.author_avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={comment.author_nickname}
          secondary={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: 160, wordWrap: "break-word" }}>
                <Typography
                  sx={{ display: "block" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {comment.message}
                </Typography>
                {moment(comment.created).fromNow()}
              </div>

              <div
                style={{ width: 80, justifyContent: "end", display: "flex" }}
              >
                <CardActions disableSpacing>
                  <IconButton
                    onClick={likeHandler}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon
                      style={{ color: likeOrDelete ? "red" : "inherit" }}
                    />
                  </IconButton>

                  {comment?.likes?.length}
                  {auth.currentUser?.uid == comment.author_id ? (
                    <IconButton
                      onClick={deleteCommentHandler}
                      aria-label="add to favorites"
                    >
                      {loading == true ? <CircularProgress /> : <Delete />}
                    </IconButton>
                  ) : null}
                </CardActions>
              </div>
            </div>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" style={{ marginTop: -20 }} />
    </div>
  );
};
