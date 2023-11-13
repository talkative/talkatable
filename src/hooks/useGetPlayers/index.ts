import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import { Player } from "@types/Game.types";

const useGetPlayers = (): Player[] => {
  const [players, setPlayers] = useState<Player[]>([]);
  const fetchPlayers = async () => {
    const colRef = collection(db, "profiles");
    await getDocs(colRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPlayers(newData);
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return players;
};

export default useGetPlayers;
