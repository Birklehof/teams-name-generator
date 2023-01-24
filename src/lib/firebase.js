// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGdpWSq4zcSck0N4iR_CYvVwMuCPJsv9w",
  authDomain: "birklehof-f1931.firebaseapp.com",
  projectId: "birklehof-f1931",
  storageBucket: "birklehof-f1931.appspot.com",
  messagingSenderId: "486146853469",
  appId: "1:486146853469:web:f16b5b52da0f47498ddbb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
