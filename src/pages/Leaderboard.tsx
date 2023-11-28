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
    <div className="bg-background-color w-screen h-screen p-4 relative sm:h-screen overflow-y-scroll">
      <BackButton onClick={handleGoBack} />
      <div className="flex items-center pt-12">
        <div className="overflow-y-scroll w-full h-[calc(100vh-200px)]">
          <table className="table-auto border-collapse w-full h-full min-w-full divide-gray-500 ">
            <thead className="border-gray-200 text-white sticky top-0 text-xl">
              <tr>
                <th
                  className="p-1 font-bold tracking-wide text-left pb-4 "
                  onClick={() => sortBy("name")}
                >
                  Namn
                </th>
                <th
                  className="p-1 font-semibold tracking-wide text-center  pb-4"
                  onClick={() => sortBy("ratio")}
                >
                  V/F
                </th>
                <th
                  className="p-1  font-semibold tracking-wide text-center pb-4"
                  onClick={() => sortBy("rank")}
                >
                  Rank
                </th>
                <th
                  className="p-1  font-semibold tracking-wide text-center  pb-4"
                  onClick={() => sortBy("rating")}
                >
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="">
              {players.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-b text-white text-xl"
                >
                  <td className="text-left font-bold text-blue-400 py-5 truncate">
                    {item.name}
                  </td>
                  <td className="text-center py-5">{item.ratio.toFixed(1)}</td>
                  <td className="text-center py-5">{item.rank}</td>
                  <td className="text-center py-5">{item.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="w-full h-[12px] py-12 bg-red"></div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
