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
      <h1>Results: </h1>
      {results.length > 0 ? (
        results.map((result) => (
          <div key={results.key}>
            <div>{result.name}</div>
            <div>{result.result}</div>
          </div>
        ))
      ) : (
        <h1>no results available</h1>
      )}
    </div>
  );
}

export default PatientDataset;
