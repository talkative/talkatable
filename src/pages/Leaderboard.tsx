import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Button from "@components/atoms/Button";

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
  }, [initialPlayers]); //* Läs på om useEffect

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
    <div className="bg-background-color w-screen h-screen p-4 relative sm:h-screen">
      <BackButton onClick={handleGoBack} />
      <div className="flex items-center pt-16">
        <div className="overflow-x overflow-y-scroll w-full px-4">
          <table className="table-auto bg-pink-300 border-collapse w-full h-full min-w-full divide-y divide-gray-500">
            <thead className="bg-table-header-color border-b-2 border-gray-200 text-white sticky top-0">
              <tr>
                <th
                  className="p-1 text-sm font-bold tracking-wide text-left"
                  onClick={() => sortBy("name")}
                >
                  Namn
                </th>
                <th
                  className="p-1 text-sm font-semibold tracking-wide text-center"
                  onClick={() => sortBy("ratio")}
                >
                  V/F
                </th>
                <th
                  className="p-1 text-sm font-semibold tracking-wide text-cecenter"
                  onClick={() => sortBy("rank")}
                >
                  Rank
                </th>
                <th
                  className="p-1 text-sm font-semibold tracking-wide text-center"
                  onClick={() => sortBy("rating")}
                >
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {players.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-table-light-color even:bg-table-dark-color"
                >
                  <td className="text-left">{item.name}</td>
                  <td className="text-center">{item.ratio.toFixed(1)}</td>
                  <td className="text-center">{item.rank}</td>
                  <td className="text-center">{item.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-4 absolute inset-x-0 bottom-6">
        <Button onClick={handleGoBack} className="font-abc">
          Tillbaka
        </Button>
      </div>
    </div>
  );
};

export default Leaderboard;
