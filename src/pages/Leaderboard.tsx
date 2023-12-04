import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import useGetPlayers from "@hooks/useGetPlayers";

import type { Player } from "providers/GameProvider";
import BackButton from "@components/atoms/BackButton";

//* Firebase till tabell

const Leaderboard = () => {
  const navigate = useNavigate();
  const initialPlayers = useGetPlayers();
  const [players, setPlayers] = useState(initialPlayers);

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  useEffect(() => {
    if (initialPlayers.length > 0) {
      setPlayers(initialPlayers);

      sortBy("rating");
    }
  }, [initialPlayers]);

  const handleGoBack = () => {
    navigate("/Home");
  };

  const sortBy = (key: keyof Player) => {
    if (!key || !initialPlayers) return;
    const sortedPlayers = [...initialPlayers];
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      sortedPlayers.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortedPlayers.sort((a, b) => (a[key] < b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }
    setPlayers(sortedPlayers);
  };

  return (
    <div className="bg-background-color w-screen h-screen px-4 sm:h-screen overflow-auto">
      <div className="mt-8">
        <BackButton onClick={handleGoBack} />
      </div>

      <table className="mt-12  rounded-md table-auto w-full h-full min-w-full divide-gray-500 ">
        <thead className=" text-white text-xl w-full">
          <tr className="text-white w-full ">
            <th
              className="font-semibold tracking-wide text-left p-4 sticky top-0 bg-button-color"
              onClick={() => sortBy("name")}
            >
              Namn
            </th>
            <th
              className=" font-semibold text-4xl tracking-wide text-center p-4 sticky top-0 bg-button-color"
              onClick={() => sortBy("wins")}
            >
              🏆
            </th>
            <th
              className="font-semibold text-4xl tracking-wide text-center p-4 sticky top-0 bg-button-color"
              onClick={() => sortBy("losses")}
            >
              😓
            </th>
            <th
              className="font-semibold tracking-wide text-center  p-4 sticky top-0 bg-button-color order-ascending"
              onClick={() => sortBy("rating")}
            >
              Rating
            </th>
          </tr>
        </thead>
        <tbody className="">
          {players.map((item) => (
            <tr key={item.id} className=" border-b text-white text-xl">
              <td className="text-left font-bold text-blue- py-5 truncate">
                {item.name}
              </td>
              <td className="text-center py-5">{item.losses}</td>
              <td className="text-center py-5">{item.wins}</td>
              <td className="text-center py-5">{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
