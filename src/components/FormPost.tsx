import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { CircularProgress, TextField } from "@mui/material";
import { ImagesearchRoller } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { auth, firestore, storage } from "../firebase";
import { collection, doc, setDoc } from "@firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
/* import { TUser } from '../redux/post' */
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import moment from "moment";

const Input = styled("input")({
  display: "none",
});

export const FormPost = ({ setOpenCreatePost }: any) => {
  const user = useAppSelector((data: RootState) => data.post.user);
  const [image, setImage]: any = useState(null);
  const formRef: any = useRef<HTMLHeadingElement>();
  const userData = Object(user);
  const [loading, setLoading] = useState(false);

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

  const createPost = async () => {
    setLoading(true);
    let image_url: any = await uploadImage();
    if (image_url == null && image) {
      image_url = image;
    }
    if (auth.currentUser?.uid !== undefined) {
      const id = auth.currentUser?.uid;
      const postRef = doc(collection(firestore, "posts"));
      console.log("values form", {
        ...formRef?.current?.values,
        image_url: image_url,
      });
      await setDoc(postRef, {
        ...formRef?.current?.values,
        image_url: image_url,
        image_name: image?.name == undefined ? null : image?.name,
        user_id: auth.currentUser?.uid,
        author_nickname:
          userData?.nickname == undefined ? null : userData?.nickname,
        avatar: userData?.avatar == undefined ? null : userData?.avatar,
        created: new Date().toISOString(),
      }).then(() => {
        console.log("created");
        setLoading(false);
        setOpenCreatePost(false);
      });
    }
  };

  return (
    <div style={{ padding: 10 }}>
      <div
        style={{ display: "flex", overflow: "auto", justifyContent: "center" }}
      >
        {image !== null ? (
          <div
            style={{
              width: 300,
              height: 300,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img
              style={{ width: 200, height: 400 }}
              alt="imagePost"
              src={
                image !== null && image !== undefined
                  ? URL.createObjectURL(
                      image !== undefined || null ? image : ""
                    )
                  : ""
              }
            />
          </div>
        ) : (
          <PanoramaIcon sx={{ width: 200, height: 200, color: "#e0e0e0" }} />
        )}
      </div>

      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(values) => {
          createPost();
          console.log(values, "values");
        }}
        innerRef={formRef}
      >
        <Form>
          <Field
            maxRows={4}
            multiline={true}
            variant="standard"
            fullWidth
            label="text"
            as={TextField}
            name="text"
            placeholder="text"
          />
          <br />
          <br />
          <label style={{ width: "100%" }} htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              name="file"
              onChange={(e: any) => {
                /*  setImage(e.target.files) */
                const files: any = e.target.files[0];

                setImage(files);
              }}
              accept="image/*"
              multiple
              type="file"
            />
            <Button
              fullWidth
              variant="contained"
              color="inherit"
              component="span"
            >
              Upload image
            </Button>
          </label>
          <br />
          <br />
          {loading == true ? (
            <CircularProgress />
          ) : (
            <Button variant="contained" color="success" type="submit" fullWidth>
              post
            </Button>
          )}
        </Form>
      </Formik>
    </div>
  );
};
