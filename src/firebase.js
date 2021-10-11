
import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpkmWqF4Hc769ZUDp8P907QOshQHS-P0I",
  authDomain: "nina-app-fc48a.firebaseapp.com",
  projectId: "nina-app-fc48a",
  storageBucket: "nina-app-fc48a.appspot.com",
  messagingSenderId: "409472573151",
  appId: "1:409472573151:web:4e763aee4bdce70008936a"
};


const app = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore(app)