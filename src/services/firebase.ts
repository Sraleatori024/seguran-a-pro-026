
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWQX82Xrclp2ApKF8ENhQp4AP_6_qfgqQ",
  authDomain: "guardsystem-pro.firebaseapp.com",
  databaseURL: "https://guardsystem-pro-default-rtdb.firebaseio.com",
  projectId: "guardsystem-pro",
  storageBucket: "guardsystem-pro.firebasestorage.app",
  messagingSenderId: "142137999179",
  appId: "1:142137999179:web:aa85911bf9d52546ac72ce",
  measurementId: "G-4KRLHCP83L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { analytics };
export default app;
