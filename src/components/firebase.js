import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIhuFI8Asd-aZo-o_QbgiG54TK4kfk12Q",
  authDomain: "store-16b3d.firebaseapp.com",
  projectId: "store-16b3d",
  storageBucket: "store-16b3d.appspot.com",
  messagingSenderId: "962727662076",
  appId: "1:962727662076:web:3faa5e422a1705e1c56279",
  measurementId: "G-77LJT46CXJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
