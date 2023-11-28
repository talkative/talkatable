import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import { playerImgs } from "@utils/playerImages";

const Home = () => {
  const navigate = useNavigate();

  const handleLeaderBoard = () => {
    navigate("/Leaderboard");
  };

  const handleNewGame = () => {
    navigate("/Player-Selection");
  };

  return (
    <div className="w-screen h-screen bg-background-color flex flex-col sm:h-screen">
      <div className="flex justify-center items-center h-3/4 overflow-hidden p-4">
        <img
          src="src/utils/playerImages.tsx"
          alt="Talkative-logo"
          className="w-2/3 animate-spin-slow "
        />
      </div>
      <div className="p-4">
        <div className="py-2">
          <Button
            onClick={handleNewGame}
            type="primary"
            className="font-abc bg-none"
          >
            Ny match
          </Button>
        </div>
        <div className="py-2">
          <Button onClick={handleLeaderBoard} className="font-abc">
            Tabell
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
