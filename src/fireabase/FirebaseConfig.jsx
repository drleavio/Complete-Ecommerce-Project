// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaCgo3DDIPWZUQSAbXjOFKBiHrOLZAp_U",
  authDomain: "myfirstapp-5eb45.firebaseapp.com",
  projectId: "myfirstapp-5eb45",
  storageBucket: "myfirstapp-5eb45.appspot.com",
  messagingSenderId: "214467221280",
  appId: "1:214467221280:web:2ebe527fbcdf265ec5a945",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
