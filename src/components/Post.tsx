import React, { FC, useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { blue, grey, red } from "@mui/material/colors";
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
import { auth, firestore } from "../firebase";
import { CircularProgress } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { CommentList } from "./CommentList";
import { TPost } from ".././types/types";
import { useAppSelector } from "../redux/hooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";

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

  const likeOrDelete = post?.likes?.find(
    (d: any) => d == auth.currentUser?.uid
  );

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
                      onClick={async () => {
                        if (
                          post.id !== undefined &&
                          auth.currentUser?.uid !== undefined
                        ) {
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
                      }}
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
                    <IconButton
                      onClick={async () => {
                        console.log(post.id, "userId");
                        setLoading(true);
                        if (post.user_id !== null || undefined) {
                          await deleteDoc(
                            doc(firestore, `posts/${post?.id}/comments`)
                          ).then(async () => {
                            await deleteDoc(
                              doc(firestore, "posts", post?.id)
                            ).then(() => {
                              setLoading(false);
                            });
                          });
                        }
                      }}
                      aria-label="delete"
                    >
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
