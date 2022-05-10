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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    name: yup.string().required(),
  })

const schema2 = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })
  .required();

export const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [error, setError] = useState(false);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date());
  const [showPassSignup, setShowPassSignup] = useState(false);
  const [showPassLogin, setShowPassLogin] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    resolver: yupResolver(schema2),
  });

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
          following: [],
          followers: [],
          avatar: null,
        })
          .then(() => {
            setLoading(false);
            navigate("/");
          })
          .catch((err) => {
            setLoading(false);
            setError(true);
            console.log(err);
          });
      }
    });
  };

  const loginHandler = (data: any) => {
    setLoading2(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/");
        setLoading2(false);
      })
      .catch((err: any) => {
        setLoading2(false);
        setError(true);

        console.log(err, "signed in error");
      });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        overflow: "auto",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "228px",
          height: "900px",
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
            type="email"
            label="Email"
            {...register("email", {
              required: true,
            })}
            helperText={errors.email && "Заполните поле"}
            error={errors.email && true}
          />
          <TextField
            variant="standard"
            label="Name"
            helperText={errors.name && "Заполните поле"}
            error={errors.name && true}
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

          <TextField
            id="standard-adornment-password"
            type={showPassSignup ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            label="Password"
            variant="standard"
            helperText={errors.password && "Заполните минимум 6 символов."}
            error={errors.password && true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassSignup(true)}
                    onMouseDown={() => setShowPassSignup(false)}
                    edge="end"
                  >
                    {showPassSignup ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

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
            {...register2("email")}
            label="Email"
            type="email"
            helperText={errors2.email && "Заполните поле."}
            variant="standard"
            error={errors2.email && true}
          />

          <TextField
            label="Password"
            id="standard-adornment-password2"
            type={showPassLogin ? "text" : "password"}
            {...register2("password")}
            helperText={errors2.password && "Заполните минимум 6 символов."}
            error={errors2.password && true}
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassLogin(true)}
                    onMouseDown={() => setShowPassLogin(false)}
                    edge="end"
                  >
                    {showPassLogin ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {loading2 ? (
            <CircularProgress />
          ) : (
            <Button
              sx={{ m: 1, width: "27ch" }}
              onClick={handleSubmit2(loginHandler)}
              variant="outlined"
              type="submit"
              fullWidth
            >
              submit
            </Button>
          )}
        </Box>
      </div>
    </div>
  );
};
