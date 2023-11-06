import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import Playerinfo from "@components/molecules/Playerinfo";
import "firebase/firestore"; // Make sure to include Firestore in your imports
import {
  getFirestore,
  updateDoc,
  doc,
  // collection,
  // getDocs,
  // addDoc,
  // deleteDoc,
  // onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcm2Rk20ndY8mujgHDU6Orb0IZehjhCuI",
  authDomain: "talkative-2a81f.firebaseapp.com",
  projectId: "talkative-2a81f",
  storageBucket: "talkative-2a81f.appspot.com",
  messagingSenderId: "558555865408",
  appId: "1:558555865408:web:eb6669fad9cd3464f99aa5",
  measurementId: "G-9B52959C5Q",
};

// Init firebase app
const app = initializeApp(firebaseConfig);

// init service
const db = getFirestore(app);

const updatePlayerStats = (playerId: string, wins: number, losses: number) => {
  const playerRef = doc(db, "profiles", playerId);

  updateDoc(playerRef, {
    wins: wins,
    losses: losses,
  })
    .then(() => {
      console.log("Player stats updated successfully");
    })
    .catch((error) => {
      console.error("Error updating player stats: ", error);
    });
};
// collection ref
// const colRef = collection(db, "profiles");

// real time collection data
// getDocs(colRef).then((snapshot) => {
//   let profiles = [];
//   snapshot.docs.forEach((doc) => {
//     profiles.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(profiles);
// });
// // .catch((err) => {
// //   console.log("Detta är fel");
// // });

// //* Add documents
// const addProfileForm = document.querySelector(".add");
// addProfileForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   addDoc(colRef, {
//     name: addProfileForm.name.value,
//   }).then(() => {
//     addProfileForm.reset();
//   });
// });

// //* Delete document
// const deleteProfileForm = document.querySelector(".delete");
// deleteProfileForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const docRef = doc(db, "profiles", deleteProfileForm.id.value);

//   deleteDoc(docRef).then(() => {
//     deleteProfileForm.reset();
//   });
// });

export { app as default, db, updatePlayerStats };
