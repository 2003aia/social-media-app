import {
  Avatar,
  Modal,
  Paper,
  Button,
  Box,
  CardMedia,
  Tabs,
  Tab,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import PostList from "./PostList";
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
interface iPosts {
  text: string;
  id: string;
}

interface IProfile {
  posts: Array<iPosts>;
}
export const Profile: FC<IProfile> = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [edit, setEdit] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const open = Boolean(anchorEl);
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
          console.log(doc.data().text, "doc");
          list.push({ ...doc.data(), id: doc.id });
        });
        setUserPosts(list);
      });
    }
  }, []);

  return (
    <div className={styles.profile}>
      {user.avatar ? (
        <CardMedia
          component="img"
          height="190"
          width="100%"
          image="https://i.pinimg.com/474x/59/fe/0a/59fe0ad8cdbe4314797b29e8f033384c.jpg"
          className={styles.headerPicture}
          alt="header-picture"
        />
      ) : (
        <div className={styles.headerPicture}></div>
      )}

      <div className={styles.first}>
        <div className={styles.avatarWrapper}>
          {image !== null ? (
            <Avatar
              className={styles.avatar}
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
              className={styles.avatar}
              sx={{ width: 190, height: 190 }}
              alt="userAvatar"
              src={user?.avatar && "/broken-image.jpg"}
            />
          )}
          {/* <ProfileEdit
          setEdit={setEdit}
          edit={edit}
          image={image}
          setImage={setImage}
        /> */}

          <Button
            className={styles.button}
            onClick={() => {
              setEdit(true);
            }}
            variant="outlined"
          >
            {edit == true ? "cancel" : "Edit Profile"}
          </Button>
        </div>
        <div className={styles.info}>
          <p className={styles.infoText} style={{ fontWeight: "bold" }}>
            {user.nickname}
          </p>
          <p className={styles.infoText}>@fdj</p>
          <p className={styles.infoText}> Born May 15, 2003</p>
          <p className={styles.infoText}>Joined 234354</p>
          <span className={styles.infoText}>
            <span style={{ fontWeight: "bold" }}>22</span> following
          </span>
          <span className={styles.infoText}>
            <span style={{ fontWeight: "bold" }}>0</span> followers
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
          <Button
            variant="outlined"
            fullWidth
            onClick={(e) => {
              setOpenCreatePost(true);
            }}
          >
            new post
          </Button>
          <Modal
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
          </Modal>

          <PostList posts={userPosts} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </div>
  );
};
