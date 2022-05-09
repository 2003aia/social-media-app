import {
  CircularProgress,
  FormControl,
  IconButton,
  Modal,
  Box,
  Paper,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import React, { useState, FC } from "react";
import { auth, firestore } from "../firebase";
import { doc, updateDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { storage } from "../firebase";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { postData, setRefresh } from "../redux/post";

const Input = styled("input")({
  display: "none",
});

interface IProfileEdit {
  edit: boolean;
  image?: any;
  setImage?: any;
  setEdit?: any;
}

export const ProfileEdit: FC<IProfileEdit> = ({
  edit,
  /* image,
  setImage, */
  setEdit,
}) => {
  const [image, setImage]: any = useState(null);
  const user = useAppSelector((data: RootState) => data.post.user);
  const userData = Object(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: userData?.name, email: userData?.email },
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    if (image == null) {
      return null;
    }

    const storageRef = ref(storage, `files/${auth.currentUser?.uid}/avatar`);

    const uploadTask = uploadBytes(storageRef, image);

    try {
      await uploadTask;
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const updateHandler = async (data: any) => {
    if (auth.currentUser?.uid !== undefined) {
      setLoading(true);
      let image_url: any = await uploadImage();
      if (image_url == null && image) {
        image_url = image;
      }

      const userRef = doc(firestore, "users", auth.currentUser?.uid);
      await updateDoc(userRef, {
        email: data.email,
        name: data.name,
        avatar: image_url,
      }).then(() => {
        dispatch(
          postData({
            ...user,
            avatar: image !== null ? image : user.avatar,
            email: data.email,
            name: data.name,
          })
        );
        /* dispatch(setRefresh(true)); */
        setLoading(false);
      });
    }
  };

  return (
    <Modal
      sx={{ zIndex: 20000 }}
      open={edit}
      onClose={() => {
        setImage(null);
        setEdit(false);
      }}
    >
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
/* 
            height: 400,
            overflow: "auto", */
          p: 3,
        }}
      >
        <Box
          sx={{
            "& .MuiTextField-root": { m: 2, width: "25ch" },
          }}
          component="form"
        >
          {/*  <FormControl> */}
          <IconButton
            onClick={() => {
              setImage(null);
              setEdit(false);
            }}
            style={{ marginLeft: "80%" }}
          >
            <ClearIcon />
          </IconButton>
          {image !== null ? (
            <Avatar
              sx={{ width: 190, height: 190, margin: "auto", marginBottom: 2 }}
              alt="imagePost"
              src={URL.createObjectURL(
                image !== undefined || null ? image : ""
              )}
            />
          ) : (
            <Avatar
              sx={{ width: 190, height: 190, margin: "auto", marginBottom: 2 }}
              alt="userAvatar"
              src={userData?.avatar && "/broken-image.jpg"}
            />
          )}

          <label style={{ width: "100%" }} htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              onChange={(e: any) => {
                const files: any = e.target.files[0];

                setImage(files);
              }}
              accept="image/*"
              multiple
              type="file"
            />
            <Button
              fullWidth
              style={{ width: "100%" }}
              variant="outlined"
              component="span"
            >
              Upload image
            </Button>
          </label>
          <br />
          <TextField
            color="success"
            fullWidth
            label="email"
            variant="standard"
            {...register("email")}
          />
          <br />
          <TextField
            color="success"
            fullWidth
            label="name"
            variant="standard"
            {...register("name")}
          />
          <br />
          {loading == true ? (
            <CircularProgress />
          ) : (
            <Button
              style={{ width: "100%" }}
              onClick={handleSubmit(updateHandler)}
              fullWidth
              variant="contained"
            >
              submit
            </Button>
          )}
        </Box>
      </Paper>
    </Modal>
  );
};
