// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFYXN9CKE7REmy7d-KZcpRrNaKVwzOo5w",
  authDomain: "fir-awesome-c2091.firebaseapp.com",
  projectId: "fir-awesome-c2091",
  storageBucket: "fir-awesome-c2091.appspot.com",
  messagingSenderId: "92542087675",
  appId: "1:92542087675:web:730f1b8f7385c86e475b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;