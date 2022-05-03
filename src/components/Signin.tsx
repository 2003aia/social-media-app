import React, { useState, useEffect } from "react";
import "../App.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firestore } from "../firebase";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { Button, Card } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [email2, setEmail2] = useState("");
  const [pass2, setPass2] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();


  return (
    <div className="ui container" style={{ background: "#fff" }}>
      <div
        style={{
          marginTop: 30,
          paddingBottom: 200,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card>
          <Card>
            <h3>SignUp</h3>

            <form style={{ width: 300, marginTop: 30 }}>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="email"
                />
                <input
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value);
                  }}
                  placeholder="nickname"
                />

                <input
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  placeholder="age"
                />
                <input
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  placeholder="password"
                />
              <Card>
                <div className="ui two buttons">
                  <Button
                    onClick={() => {
                      createUserWithEmailAndPassword(auth, email, pass).then(
                        async () => {
                          if (auth.currentUser?.uid !== undefined) {
                            const id: any = auth.currentUser?.uid;
                            console.log("firestore");
                            await setDoc(doc(firestore, "users", id), {
                              email: email,
                              nickname: nickname,
                              age: age,
                            })
                              .then(() => {
                                navigate("/home/");
                              })
                              .catch((err) => {
                                if (err.code == "auth/email-already-exists") {
                                  console.log("email already exists");
                                }
                              });
                          }
                        }
                      );
                    }}
                  >
                    submit
                  </Button>
                </div>
              </Card>
            </form>

            <h3 style={{ marginTop: 30 }}>Login</h3>

            <form style={{ width: 300, marginTop: 30 }}>
                <input
                  value={email2}
                  onChange={(e) => {
                    setEmail2(e.target.value);
                  }}
                  placeholder="email"
                />
                <input
                  value={pass2}
                  onChange={(e) => {
                    setPass2(e.target.value);
                  }}
                  placeholder="password"
                />
                <div className="ui two buttons">
                  <Button
                    onClick={() => {
                      signInWithEmailAndPassword(auth, email2, pass2)
                        .then(() => navigate("/home/"))
                        .catch((err) => {
                          console.log(err, "signed in error");
                        });
                    }}
                  >
                    submit
                  </Button>
                </div>
            </form>
          </Card>
        </Card>
      </div>
    </div>
  );
};
