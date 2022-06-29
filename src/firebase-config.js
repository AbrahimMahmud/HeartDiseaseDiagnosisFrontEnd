// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
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
import { useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWHGDYvn_n-wwC9ZOskp1USNRquFWdw4U",
  authDomain: "heartdiseasediagnosisml.firebaseapp.com",
  projectId: "heartdiseasediagnosisml",
  storageBucket: "heartdiseasediagnosisml.appspot.com",
  messagingSenderId: "48045985241",
  appId: "1:48045985241:web:e3ad3f6c58d209ba47ddc8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  phone,
  address,
  language,
  gender
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      phone,
      address,
      language,
      gender,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const updatePatientData = async (
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
) => {
  try {
    await setDoc(doc(db, "diagnostic-prediction", "patient"), {
      name: name,
      age: age,
      sex: sex,
      cp_0: cp0,
      cp_1: cp1,
      cp_2: cp2,
      cp_3: cp3,
      trestbps: trestbps,
      chol: chol,
      fbs: fbs,
      exang: exang,
      thalach: thalach,
      restecg: restecg,
      oldpeak: oldpeak,
      slope_0: slope0,
      slope_1: slope1,
      slope_2: slope2,
      ca: ca,
      thal_0: thal0,
      thal_1: thal1,
      thal_2: thal2,
      thal_3: thal3,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};
