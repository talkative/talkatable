import React from "react";
import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleLeaderBoard = () => {
    navigate("/Leaderboard");
  };

  const handleNewGame = () => {
    navigate("/Player-Selection");
  };

  return (
    <div className="w-screen h-screen bg-background-color flex">
      <div className="flex flex-col items-center justify-center h-2/3">
        <img
          src="./public/Talkative-logo.png"
          alt="Talkative.logo"
          className="w-3/5 mx-auto"
        />
      </div>
      <div className="p-4 absolute inset-x-0 bottom-6">
        <div className="py-2">
          <Button onClick={handleNewGame} className="font-abc">
            Ny match
          </Button>
        </div>
        <div className="py-2">
          <Button onClick={handleLeaderBoard} className="font-abc">
            Tabell
          </Button>
        </div>
        <div className="py-2">
          <Button className="font-abc">Spelare</Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
