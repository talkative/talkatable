import React from "react";
import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import useGetPlayers from "@hooks/useGetPlayers";

//* Firebase till tabell

const Leaderboard = () => {
  const navigate = useNavigate();
  const players = useGetPlayers();

  const handleGoBack = () => {
    navigate("/Home");
  };

  // TODO - Sortera tabell efter Rating eller wins
  return (
    <div className="bg-background-color w-screen h-screen p-2 relative">
      <div className="flex items-center mt-40">
        <div className="overflow-x overflow-y-scroll w-full">
          <table className="table-auto bg-pink-300 border-collapse w-full h-full min-w-full divide-y divide-gray-500">
            <thead className="bg-table-header-color border-b-2 border-gray-200 text-white sticky top-0">
              <tr>
                <th className="p-1 text-sm font-bold tracking-wide text-left">
                  Namn
                </th>
                <th className="p-1 text-sm font-semibold tracking-wide text-center">
                  V
                </th>
                <th className="p-1 text-sm font-semibold tracking-wide text-center">
                  F
                </th>
                <th className="p-1 text-sm font-semibold tracking-wide text-cecenter">
                  Rank
                </th>
                <th className="p-1 text-sm font-semibold tracking-wide text-center">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {players.map((item, index) => (
                <tr
                  key={item.id}
                  className="odd:bg-table-light-color even:bg-table-dark-color"
                >
                  <td className="text-left">{item.name}</td>
                  <td className="text-center">{item.wins}</td>
                  <td className="text-center">{item.losses}</td>
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
