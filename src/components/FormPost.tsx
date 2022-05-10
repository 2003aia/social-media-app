import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Clear, PanoramaVertical } from "@mui/icons-material";
import Image from "@mui/icons-material/Image";
import {
  CircularProgress,
  TextField,
  CardMedia,
  IconButton,
  Divider,
  Button,
  Avatar,
} from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { auth, firestore, storage } from "../firebase";
import { collection, doc, setDoc } from "@firebase/firestore";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useForm } from "react-hook-form";

const Input = styled("input")({
  display: "none",
});

export const FormPost = ({ setOpenCreatePost }: any) => {
  const user = useAppSelector((data: RootState) => data.post.user);
  const [image, setImage]: any = useState(null);
  const userData = Object(user);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const uploadImage = async () => {
    if (image == null) {
      return null;
    }

    const storageRef = ref(
      storage,
      `files/${auth.currentUser?.uid}/${image.name}`
    );

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

  const createPost = async (data: any) => {
    setLoading(true);
    let image_url: any = await uploadImage();
    if (image_url == null && image) {
      image_url = image;
    }
    if (auth.currentUser?.uid !== undefined) {
      const postRef = doc(collection(firestore, "posts"));

      await setDoc(postRef, {
        text: data.text,
        image_url: image_url,
        image_name: image?.name == undefined ? null : image?.name,
        user_id: auth.currentUser?.uid,
        author_name: userData?.name == undefined ? null : userData?.name,
        avatar: userData?.avatar == undefined ? null : userData?.avatar,
        created: new Date().toISOString(),
      }).then(() => {
        reset({ text: "" });
        setImage(null);
        setLoading(false);
        setOpenCreatePost(false);
      });
    }
  };

  return (
    <div
      style={{
        padding: 10,
        background: "#fff",
        color: "grey",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Avatar
          sx={{ width: 50, height: 50 }}
          alt="userAvatar"
          src={userData?.avatar && "/broken-image.jpg"}
        />
        <TextField
          sx={{ margin: "0 5px 10px" }}
          error={errors.text && true}
          maxRows={4}
          multiline={true}
          variant="standard"
          helperText={errors.text && "заполните поле"}
          fullWidth
          {...register("text", { required: true })}
          label="text"
          placeholder="text"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          htmlFor="contained-button-file2"
        >
          <Input
            id="contained-button-file2"
            name="file"
            onChange={(e: any) => {
              const files: any = e.target.files[0];

              setImage(files);
            }}
            accept="image/*"
            type="file"
          />
          <Image fontSize="large" />
        </label>

        {image !== null ? (
          <div>
            <div>
              <IconButton onClick={() => setImage(null)}>
                <Clear />
              </IconButton>
            </div>
            <CardMedia
              sx={{ borderRadius: 6, marginTop: 1 }}
              component="img"
              image={URL.createObjectURL(
                image !== undefined && image !== null ? image : ""
              )}
              alt="postImage"
            />
          </div>
        ) : null}
        {loading == true ? (
          <CircularProgress />
        ) : (
          <Button
            sx={{ height: 40, display: "flex", justifyContent: "center" }}
            variant="contained"
            onClick={handleSubmit(createPost)}
          >
            post
          </Button>
        )}
      </div>
    </div>
  );
};
