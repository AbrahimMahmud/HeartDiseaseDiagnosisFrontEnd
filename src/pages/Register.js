import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase-config";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/auth.css";
import "../styles/loginbutton.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [number, setNumber] = useState("");
  const [addr, setAddress] = useState("");
  const [lang, setLanguage] = useState("");
  const [gend, setGender] = useState("");
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, number, addr, lang, gend);
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  if (user) navigate("/dashboard");
  return (
    <div id="content">
      <div class="grid grid--margin">
        <div class="form">
          <div class="form-panel one">
            <div class="form-header">
              <h1>Register An Account</h1>
            </div>
            <div class="form-content">
              <div className="loginPage">
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="//fonts.googleapis.com/css?family=Open+Sans"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
                <input
                  type="password"
                  className="login__textBox"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={addr}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Work Address"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={lang}
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder="Primary Language"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={gend}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Gender"
                />
                <div>
                  <button className="login__btn" onClick={register}>
                    Register Account
                  </button>
                  <div>Already have an account?</div>
                  <div>
                    <Link to="/login">Login</Link> now.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
