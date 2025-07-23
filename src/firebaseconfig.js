import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX-Fe3SLRNVKIVoTe0zObC9YLRCpb2BPI",
  authDomain: "aetheris-bcb7b.firebaseapp.com",
  projectId: "aetheris-bcb7b",
  storageBucket: "aetheris-bcb7b.firebasestorage.app",
  messagingSenderId: "247416180145",
  appId: "1:247416180145:web:c9589294a3c81285130190",
  measurementId: "G-F6632F7ZHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);