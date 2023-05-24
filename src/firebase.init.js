// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5t0Nlky3315zQUY3V-jcBr3_JT8e4Zd8",
  authDomain: "findblood-8e780.firebaseapp.com",
  projectId: "findblood-8e780",
  storageBucket: "findblood-8e780.appspot.com",
  messagingSenderId: "473078040612",
  appId: "1:473078040612:web:268549d98d4a63e5e5b0b1",
  measurementId: "G-5NN87T78N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;