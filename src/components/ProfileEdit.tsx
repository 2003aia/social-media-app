import {
  CircularProgress,
  FormControl,
  IconButton,
  Modal,
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
  image,
  setImage,
  setEdit,
}) => {
  const user = useAppSelector((data: RootState) => data.post.user);
  const userData = Object(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: userData?.nickname, email: userData?.email },
  });

  const [email, setEmail] = useState(userData?.email);
  const [nickname, setNickname] = useState(userData?.nickname);
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    if (image == null) {
      return null;
    }

    const storageRef = ref(storage, `files/${auth.currentUser?.uid}/avatar`);

    const uploadTask = uploadBytes(storageRef, image, {
      contentType: "image/png",
    });

    try {
      await uploadTask;
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const updateHandler = async () => {
    if (auth.currentUser?.uid !== undefined) {
      setLoading(true);
      let image_url: any = await uploadImage();
      if (image_url == null && image) {
        image_url = image;
      }
      const userRef = doc(firestore, "users", auth.currentUser?.uid);
      await updateDoc(userRef, {
        email: email,
        nickname: nickname,
        avatar: /* user.avatar !== null ? user.avatar :  */ image_url,
      }).then(() => {
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
          p: 4,
        }}
      >
        <FormControl sx={{ m: -1 }}>
          <IconButton
            onClick={() => {
              setImage(null);
              setEdit(false);
            }}
            style={{ marginLeft: "80%" }}
          >
            <ClearIcon />
          </IconButton>
          <div style={{marginBottom:20}}>
            {image !== null ? (
              <Avatar
                sx={{ width: 190, height: 190 }}
                alt="imagePost"
                src={
                  image !== null && image !== undefined
                    ? URL.createObjectURL(
                        image !== undefined || null ? image : ""
                      )
                    : ""
                }
              />
            ) : (
              <Avatar
                sx={{ width: 190, height: 190 }}
                alt="userAvatar"
                src={userData?.avatar && "/broken-image.jpg"}
              />
            )}
          </div>

          <label style={{ width: "100%" }} htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              /* {...register("file")} */
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
              variant="contained"
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
            /* value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }} */
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
            >
              submit
            </Button>
          )}
        </FormControl>
      </Paper>
    </Modal>
  );
};
