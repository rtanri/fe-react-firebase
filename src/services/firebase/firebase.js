import firebase from "firebase";
// import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAISnnxTloSPK26z_sbwfeqae8tZ6AWrhQ",
  authDomain: "gallery-exhibitor-app-f2004.firebaseapp.com",
  projectId: "gallery-exhibitor-app-f2004",
  appId: "1:429543931380:web:1eaaf7d723a57aa0340da1",
  storageBucket: "gallery-exhibitor-app-f2004.appspot.com",
  messagingSenderId: "429543931380",
  databaseURL:
    "https://gallery-exhibitor-app-f2004-default-rtdb.asia-southeast1.firebasedatabase.app",
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

let FirebaseApp = null;

export function getFirebaseInstance() {
  if (FirebaseApp) {
    return FirebaseApp;
  }
  FirebaseApp = firebase.initializeApp(firebaseConfig);
  return FirebaseApp;
}
