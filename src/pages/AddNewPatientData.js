import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  updatePatientData,
} from "../firebase-config";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/auth.css";
import "../styles/loginbutton.css";

function AddNewPatientData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [cp0, setCp0] = useState("");
  const [cp1, setCp1] = useState("");
  const [cp2, setCp2] = useState("");
  const [cp3, setCp3] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [trestbps, setTrestbps] = useState("");
  const [chol, setChol] = useState("");
  const [fbs, setFbs] = useState("");
  const [exang, setExang] = useState("");
  const [thalach, setThalach] = useState("");
  const [restecg, setRestecg] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [slope0, setSlope0] = useState("");
  const [slope1, setSlope1] = useState("");
  const [slope2, setSlope2] = useState("");
  const [ca, setCa] = useState("");
  const [thal0, setThal0] = useState("");
  const [thal1, setThal1] = useState("");
  const [thal2, setThal2] = useState("");
  const [thal3, setThal3] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  const update = () => {
    if (
      !name ||
      !age ||
      !sex ||
      !cp0 ||
      !cp1 ||
      !cp2 ||
      !cp3 ||
      !trestbps ||
      !chol ||
      !fbs ||
      !exang ||
      !thalach ||
      !restecg ||
      !oldpeak ||
      !slope0 ||
      !slope1 ||
      !slope2 ||
      !ca ||
      !thal0 ||
      !thal1 ||
      !thal2 ||
      !thal3
    ) {
      alert("Please enter ALL data");
    } else {
      updatePatientData(
        name,
        age,
        sex,
        cp0,
        cp1,
        cp2,
        cp3,
        trestbps,
        chol,
        fbs,
        exang,
        thalach,
        restecg,
        oldpeak,
        slope0,
        slope1,
        slope2,
        ca,
        thal0,
        thal1,
        thal2,
        thal3
      );
      navigate("/dashboard");
    }
  };

  return (
    <div id="content">
      <div class="grid grid--margin">
        <div class="form">
          <div class="form-panel one">
            <div class="form-header">
              <h1>Enter Patient Data</h1>
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
                  placeholder="Patient Name"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  placeholder="Sex"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={cp0}
                  onChange={(e) => setCp0(e.target.value)}
                  placeholder="CP Type 0?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={cp1}
                  onChange={(e) => setCp1(e.target.value)}
                  placeholder="CP Type 1?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={cp2}
                  onChange={(e) => setCp2(e.target.value)}
                  placeholder="CP Type 2?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={cp3}
                  onChange={(e) => setCp3(e.target.value)}
                  placeholder="CP Type 3?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={trestbps}
                  onChange={(e) => setTrestbps(e.target.value)}
                  placeholder="Resting BPS"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={chol}
                  onChange={(e) => setChol(e.target.value)}
                  placeholder="Cholesterol"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={fbs}
                  onChange={(e) => setFbs(e.target.value)}
                  placeholder="FBS"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={exang}
                  onChange={(e) => setExang(e.target.value)}
                  placeholder="Exang"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={thalach}
                  onChange={(e) => setThalach(e.target.value)}
                  placeholder="Thalach"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={restecg}
                  onChange={(e) => setRestecg(e.target.value)}
                  placeholder="Resting ECG"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={oldpeak}
                  onChange={(e) => setOldpeak(e.target.value)}
                  placeholder="Oldpeak"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={slope0}
                  onChange={(e) => setSlope0(e.target.value)}
                  placeholder="Slope Type 0?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={slope1}
                  onChange={(e) => setSlope1(e.target.value)}
                  placeholder="Slope Type 1?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={slope2}
                  onChange={(e) => setSlope2(e.target.value)}
                  placeholder="Slope Type 2?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={ca}
                  onChange={(e) => setCa(e.target.value)}
                  placeholder="CA"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={thal0}
                  onChange={(e) => setThal0(e.target.value)}
                  placeholder="Thal Type 0?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={thal1}
                  onChange={(e) => setThal1(e.target.value)}
                  placeholder="Thal Type 1?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={thal2}
                  onChange={(e) => setThal2(e.target.value)}
                  placeholder="Thal Type 2?"
                />
                <input
                  type="text"
                  className="login__textBox"
                  value={thal3}
                  onChange={(e) => setThal3(e.target.value)}
                  placeholder="Thal Type 3?"
                />
                <div>
                  <button className="login__btn" onClick={update}>
                    Send New Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewPatientData;
