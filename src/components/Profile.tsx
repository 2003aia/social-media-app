import {
  Avatar,
  Modal,
  Paper,
  Button,
  CardMedia,
  Tabs,
  Tab,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import {PostList} from "./PostList";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { auth, firestore } from "../firebase";
import { FormPost } from "./FormPost";
import {
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "@firebase/firestore";
import { ProfileEdit } from "./ProfileEdit";
import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import styles from "./Profile.module.css";
import { TabPanel } from "./ProfileTabPanel";
import { useWindowDimensions } from "../hooks/window";

interface iPosts {
  text: string;
  id: string;
}

interface IProfile {
  posts: Array<iPosts>;
}
export const Profile: FC<IProfile> = () => {
  const [value, setValue] = useState(0);
  const [edit, setEdit] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { height, width } = useWindowDimensions();
  const [userPosts, setUserPosts] = useState([]);
  const user = useAppSelector((data) => data.post.user);

  const [image, setImage]: any = useState(null);
  useEffect(() => {
    if (auth?.currentUser?.uid !== undefined) {
      const q = query(
        collection(firestore, "posts"),
        where("user_id", "==", auth.currentUser?.uid),
        orderBy("created", "desc"),
        limit(10)
      );

      onSnapshot(q, (data) => {
        const list: any = [];
        data.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setUserPosts(list);
      });
    }
  }, []);

  return (
    <div className={styles.profile}>
      {user.avatar !== null ? (
        <CardMedia
          component="img"
          height="190"
          width="100%"
          image={user.avatar}
          className={styles.headerPicture}
          alt="header-picture"
        />
      ) : (
        <div className={styles.headerPicture}></div>
      )}
      <div className={styles.first}>
        <div className={styles.avatarWrapper}>
          <Avatar
            className={styles.avatar}
            sx={{
              width: width <= 920 ? 120 : 190,
              height: width <= 920 ? 120 : 190,
            }}
            alt="userAvatar"
            src={user.avatar !== null ? user.avatar : ""}
          />

          <Button
            className={styles.button}
            onClick={() => {
              setEdit(true);
            }}
            variant="outlined"
          >
            Edit Profile
          </Button>
        </div>
        <div className={styles.info}>
          <p className={styles.infoText} style={{ fontWeight: "bold" }}>
            {user.name}
          </p>
          <p className={styles.infoText}>
            Born
            <span style={{ marginLeft: 8 }}>{user?.birthDate}</span>
          </p>
          <p className={styles.infoText}>
            Joined
            <span style={{ marginLeft: 8 }}>{user.created}</span>
          </p>
          <span className={styles.infoText}>
            <span style={{ fontWeight: "bold", marginRight: 8 }}>
              {user.following}
            </span>{" "}
            following
          </span>
          <span className={styles.infoText}>
            <span style={{ fontWeight: "bold", marginRight: 8 }}>
              {user.followers}
            </span>{" "}
            followers
          </span>
        </div>
      </div>
      <div className={styles.second}>
        <Tabs
          indicatorColor="primary"
          variant="fullWidth"
          textColor="inherit"
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab
            style={{ color: "#585859" }}
            icon={<TextsmsOutlinedIcon />}
            label="POSTS"
          />
          <Tab
            style={{ color: "#585859" }}
            icon={<SettingsOutlinedIcon />}
            label="SETTINGS"
          />
          <Tab
            style={{ color: "#585859" }}
            icon={<PersonPinIcon />}
            label="NEARBY"
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <PostList posts={userPosts} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
      <ProfileEdit
        setEdit={setEdit}
        edit={edit}
        image={image}
        setImage={setImage}
      />
      {/* <Modal
        sx={{ zIndex: 200000 }}
        open={openCreatePost}
        onClose={() => setOpenCreatePost(false)}
      >
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            boxShadow: 24,
            p: 4,
          }}
        >
          <FormPost setOpenCreatePost={setOpenCreatePost} />
        </Paper>
      </Modal> */}
    </div>
  );
};
