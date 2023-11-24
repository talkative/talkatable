import { initializeApp } from "firebase/app";
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
import { Player } from "providers/GameProvider";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Init firebase app
const app = initializeApp(firebaseConfig);

// init service
const db = getFirestore(app);

type UpdatePlayer = Pick<
  Player,
  "id" | "wins" | "losses" | "rating" | "ratio" | "rank"
>;

const updatePlayerStats = ({
  id,
  wins,
  losses,
  rating,
  ratio,
  rank,
}: UpdatePlayer) => {
  console.log("update player stats", id);
  const playerId = id;
  const playerRef = doc(db, "profiles", playerId);

  console.log("rating in UPDATE", rating);
  updateDoc(playerRef, {
    wins,
    losses,
    rating,
    ratio,
    rank,
  })
    .then(() => {
      console.log("Player stats updated successfully");
    })
    .catch((error) => {
      console.error("Error updating player stats: ", error);
    });
};

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
