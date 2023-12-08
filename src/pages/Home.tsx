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
    <div className="p-4 flex flex-col h-full">
      <div>
        <h1 className="font-abc text-white text-center text-4xl mt-12">
          Talkatable
        </h1>
      </div>
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
  );
};
export default Home;
