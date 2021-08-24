import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //   storageBucket: "gallery-exhibitor-app-f2004.appspot.com",
  //   messagingSenderId: "429543931380",
  //   databaseURL:
  //     "https://gallery-exhibitor-app-f2004-default-rtdb.asia-southeast1.firebasedatabase.app",
};

let FirebaseApp = null;

export function getFirebaseInstance() {
  if (FirebaseApp) {
    return FirebaseApp;
  }
  FirebaseApp = firebase.initializeApp(firebaseConfig);
  return FirebaseApp;
}
