import React, { useEffect, useState } from "react";
import "../styles/dashboard.min.css";
import "../styles/daterangepicker.css";
import "../styles/ion.rangeSlider.min.css";
import "../styles/jquery.scrollbar.css";
import "../styles/select2.css";
import "../styles/swiper.css";
import Avatar from "../images/IMG_0793.jpg";
import Results from "../images/icons/icons-64-white/flask.png";
import Stethoscope from "../images/icons/icons-64-white/stethoscope.png";
import Doctor from "../images/icons/icons-64-white/doctor.png";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");

  const getData = async () => {
    var uid = auth.currentUser.uid;

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    const address1 = docSnap.data().address;
    const name1 = docSnap.data().name;
    const number1 = docSnap.data().phone;
    const gender1 = docSnap.data().gender;
    const email1 = docSnap.data().email;
    const language1 = docSnap.data().language;

    setAddress(address1);
    setName(name1);
    setNumber(number1);
    setGender(gender1);
    setEmail(email1);
    setLanguage(language1);
  };

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  
  if (user) {
    getData();
  }

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <body
        style={{
          height: "100%",
        }}
      >
        <div
          class="dashboard-wrap"
          style={{
            height: "100%",
          }}
        >
          <div class="section section--content" id="content">
            <div class="grid grid--margin">
              <div
                class="grid__row dashboard-intro"
                style={{
                  textAlign: "left",
                }}
              >
                <div class="grid__col grid__col--margin grid__col--padding bg-white">
                  <div class="grid__row">
                    <div class="grid__col grid__col--margin grid__col--12">
                      <div class="dashboard-intro__subtitle"></div>
                      <div class="dashboard-intro__title">
                        Welcome Back, <span>{name}</span>
                      </div>
                      <div class="dashboard-intro__subtitle"></div>
                      <div class="dashboard-intro__subtitle">
                        Here is your dashboard where you can view old patient
                        data as well as submit new data for the model to
                        diagnose.
                      </div>
                    </div>
                  </div>
                  <div class="grid__row">
                    <div class="grid__col grid__col--margin grid__col--45">
                      <div class="patient-info">
                        <div class="patient-info__thumb">
                          <img src={Avatar} alt="" title="" />
                        </div>
                        <div class="patient-info__details">
                          <div class="patient-info__title">{name}</div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Email:</span> <a href="#">{email}</a>
                            </div>
                            <div class="patient-info__col">
                              <span>Work Address:</span> {address}
                            </div>
                            <div class="patient-info__col">
                              <span>Gender:</span> {gender}
                            </div>
                          </div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Phone:</span> <a href="tel:123">{number}</a>
                            </div>
                            <div class="patient-info__col">
                              <span>Languages:</span> {language}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <nav
                      class="dropdown-menu dropdown-menu--content"
                      id="moreoptions"
                    ></nav>
                  </div>

                  <div class="grid__row">
                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-blue widget-icon selected">
                      <Link
                        to="/patient-database"
                        style={{ padding: "1px", color: "white" }}
                      >
                        {" "}
                        <img src={Stethoscope} alt="" title="" />
                        <h5>VIEW PATIENT DATABASE</h5>
                      </Link>
                    </div>

                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-lightblue widget-icon selected">
                      <a
                        href="https://github.com/AbrahimMahmud/HeartDiseaseDiagnosisFrontEnd/blob/master/BACKEND/heart_disease_prediction.ipynb"
                        style={{ padding: "1px", color: "white" }}
                        target="_blank"
                      >
                        {" "}
                        <span
                          class="widget-icon__badge"
                          href="https://github.com/AbrahimMahmud/HeartDiseaseDiagnosisFrontEnd/blob/master/BACKEND/heart_disease_prediction.ipynb"
                        >
                          GITHUB
                        </span>
                        <img src={Results} alt="" title="" />
                        <h5>VIEW THE NOTEBOOK</h5>
                      </a>
                    </div>
                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-pink widget-icon selected">
                      <Link
                        to="/add-patient-data"
                        style={{ padding: "1px", color: "white" }}
                      >
                        <span class="widget-icon__badge">
                          DATA FOR DIAGNOSIS
                        </span>
                        <img src={Doctor} alt="" title="" />
                        <h5>ADD NEW PATIENT DATA</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
