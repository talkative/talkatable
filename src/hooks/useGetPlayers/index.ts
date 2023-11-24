import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Player } from "providers/GameProvider";

const useGetPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const fetchPlayers = async () => {
    const colRef = collection(db, "profiles");
    await getDocs(colRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPlayers(newData as Player[]);
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return players;
};

export default useGetPlayers;
