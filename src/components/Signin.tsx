import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "../firebase";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { Button, Card } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { CircularProgress } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ThemeProvider, createTheme } from "@mui/material";

export const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const signInHandler = (data: any) => {
    setLoading(true);
    const { email, name, password } = data;

    createUserWithEmailAndPassword(auth, email, password).then(async () => {
      if (auth.currentUser?.uid !== undefined) {
        const id: any = auth.currentUser?.uid;

        await setDoc(doc(firestore, "users", id), {
          email: email,
          name: name,
          birthDate: birthDate?.toISOString(),
          created: new Date().toISOString(),
          following: 0,
          followers: 0,
        })
          .then(() => {
            setLoading(false);
            navigate("/home/");
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
    });
  };

  const loginHandler = (data: any) => {
    setLoading(true);
    const { emailLogin, passwordLogin } = data;
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        console.log(err, "signed in error");
      });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        margin: "auto",
        overflow: "auto",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "228px",
          height: "100vh",
        }}
      >
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <h3>Sign Up</h3>

          <TextField
            variant="standard"
            type={"email"}
            label="Email"
            {...register("email", {
              required: true,
            })}
          />
          <TextField
            variant="standard"
            label="Name"
            {...register("name", {
              required: true,
            })}
          />

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileDatePicker
              label="Birth Date"
              inputFormat="DD/MM/yyyy"
              value={birthDate}
              onChange={(val: Date | null) => setBirthDate(val)}
              renderInput={(params) => (
                <TextField variant="standard" {...params} />
              )}
            />
          </LocalizationProvider>

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(true)}
                    onMouseDown={() => setShowPassword(false)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {}
          </FormControl>

          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              sx={{ m: 1, width: "27ch" }}
              onClick={handleSubmit(signInHandler)}
              variant="outlined"
              fullWidth
              type="submit"
            >
              submit
            </Button>
          )}
        </Box>

        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <h3 style={{ marginTop: 30 }}>Login</h3>
          <TextField
            {...register2("emailLogin")}
            label="Email"
            variant="standard"
          />
          <TextField
            {...register2("passwordLogin", {
              required: true,
              minLength: 6,
              maxLength: 10,
            })}
            label="Password"
            variant="standard"
          />
          <Button
            sx={{ m: 1, width: "27ch" }}
            onClick={handleSubmit2(loginHandler)}
            variant="outlined"
            type="submit"
            fullWidth
          >
            submit
          </Button>
        </Box>
      </div>
    </div>
  );
};
