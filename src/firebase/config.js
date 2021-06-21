import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCDjcoOiHsBqqLTuRtb9_yY_Ljpe3jpIOw",
  authDomain: "sachin-firegram.firebaseapp.com",
  projectId: "sachin-firegram",
  storageBucket: "sachin-firegram.appspot.com",
  messagingSenderId: "63710067715",
  appId: "1:63710067715:web:1e707506a2006f66d86236",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
