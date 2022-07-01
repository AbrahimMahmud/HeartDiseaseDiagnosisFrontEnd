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
  onSnapshot,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function PatientDataset() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [names, setNames] = useState([]);
  useEffect(() => {
    const getResultsFromFirebase = [];
    const getNamesFromFirebase = [];
    const q = query(collection(db, "previous-patient-diagnoses"));
    const patientData = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getResultsFromFirebase.push({ ...doc.data(), key: doc.id });
        getNamesFromFirebase.push({ ...doc.id });
      });
      setResults(getResultsFromFirebase);
      setNames(getNamesFromFirebase);
      setLoading(false);
    });
    return () => patientData();
  }, []);

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div>
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
                          Patient Database
                        </div>
                        <div class="dashboard-intro__subtitle"></div>
                        <div class="dashboard-intro__subtitle">
                          Here is a list of all previous heart disease
                          prediction results.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
      {results.length > 0 ? (
        results.map((result) => (
          <body
            style={{
              height: "100%",
            }}
          >
            <div class="section section--content" id="content">
              <div class="grid grid--margin">
                <div
                  style={{
                    textAlign: "left",
                  }}
                >
                  <div class="grid__col grid__col--margin grid__col--padding bg-white">
                    <div class="grid__row">
                      <div style={{ fontWeight: 700 }} key={results.key}>
                        <div>Patient Name: {result.name}</div>

                        <div>Prediction Result: {result.result}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        ))
      ) : (
        <h1>no results available</h1>
      )}
    </div>
  );
}

export default PatientDataset;
