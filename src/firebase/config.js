
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWYqbSQIFCfyIwvFqB_T7DpbXKFgD4DDU",
  authDomain: "bornoz-events.firebaseapp.com",
  projectId: "bornoz-events",
  storageBucket: "bornoz-events.appspot.com",
  messagingSenderId: "423801200894",
  appId: "1:423801200894:web:59b125bffd1ed98efb85af",
  measurementId: "G-DC8BKRGFYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app