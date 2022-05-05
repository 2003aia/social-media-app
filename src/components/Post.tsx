import React, { FC, useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  arrayUnion,
  deleteDoc,
  doc,
  setDoc,
  arrayRemove,
} from "@firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";

import { CircularProgress } from "@mui/material";
import { CommentList } from "./CommentList";
import { TPost } from ".././types/types";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import { auth, firestore, storage } from "../firebase";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface iPost {
  post: TPost;
}

const Post: FC<iPost> = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [error, setError] = useState(false);
  const likeOrDelete = post?.likes?.find(
    (d: any) => d == auth.currentUser?.uid
  );

  const deletePostHandler = async () => {
    setLoading(true);
    if (post.user_id !== null || undefined) {
      const storageRef = ref(
        storage,
        `files/${auth.currentUser?.uid}/${post.image_name}`
      );

      if (post.image_name !== '') {
         await deleteObject(storageRef)
        .then(async () => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
      }
     
      await deleteDoc(doc(firestore, "posts", post?.id))
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
      
    }
  };

  const likePostHandler = async () => {
    if (post.id !== undefined && auth.currentUser?.uid !== undefined) {
      if (likeOrDelete) {
        await setDoc(
          doc(firestore, `posts`, post.id),
          {
            likes: arrayRemove(auth.currentUser.uid),
          },
          { merge: true }
        );
      } else {
        await setDoc(
          doc(firestore, `posts`, post.id),
          {
            likes: arrayUnion(auth.currentUser.uid),
          },
          { merge: true }
        );
      }
    }
  };

  return (
    <ListItem
      alignItems="flex-start"
      style={{
        marginBottom: 5,
        borderBottom: "2px solid #fff",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="avatar" src={post.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={post.author_nickname}
        secondary={
          <React.Fragment>
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
              {moment(post?.created).fromNow()}
            </Stack>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {post.text}
              {post.image_url && (
                <CardMedia
                  sx={{ borderRadius: 6, marginTop: 1 }}
                  component="img"
                  image={post.image_url}
                  alt="image"
                />
              )}
              <CardActions
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <IconButton size="small" onClick={handleOpen}>
                    <ChatBubbleIcon />
                  </IconButton>
                  {post.totalMessages}
                </div>

                <div>
                  <IconButton
                    size="small"
                    onClick={likePostHandler}
                    color={!likeOrDelete ? "default" : "error"}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  {post?.likes?.length}
                </div>

                <IconButton size="small">
                  <ShareIcon />
                </IconButton>

                {loading == true ? (
                  <CircularProgress />
                ) : auth?.currentUser?.uid == post?.user_id ? (
                  <IconButton onClick={deletePostHandler} aria-label="delete">
                    <DeleteOutlineIcon />
                  </IconButton>
                ) : null}
              </CardActions>
            </Typography>
          </React.Fragment>
        }
      />
      <CommentList open={open} setOpen={setOpen} id={post?.id} post={post} />
    </ListItem>
  );
};

export default Post;
