import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleLeaderBoard = () => {
    navigate("/Leaderboard");
  };

  const handleChoosePlayer = () => {
    navigate("/Playergrid");
  };

  return (
    <div className="absolute inset-0">
      <div className="w-screen h-screen p-4 bg-background-color flex flex-col">
        <div className="flex justify-center items-center flex-grow p-4">
          <img
            src="/Talkative-logo.png"
            alt="Talkative-logo"
            className="w-2/3 animate-spin-slow"
          />
        </div>
        <div className="bottom-6">
          <div className="py-2 inset-x-0">
            <Button onClick={handleLeaderBoard} className="font-abc">
              Tabell
            </Button>
          </div>
          <div className="py-2">
            <Button
              onClick={handleChoosePlayer}
              type="primary"
              className="font-abc bg-none"
            >
              Ny match
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
