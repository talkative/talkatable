import Button from "@components/atoms/Button";

function handleStartGame() {
  console.log("Starta spel");
}

function handleRandom() {
  console.log("Random player");
}

const players = [
  {
    name: "Pamp",
    src: "Pamp.png",
    points: 11,
  },
  {
    name: "Anton",
    src: "Anton.png",
    points: 1,
  },
];

export const playerSelection = (
  <div className="bg-background-color w-screen h-screen flex flex-col p-4">
    <div className="text-2xl text-center py-10 text-white font-bold font-abc">
      Välj spelare
    </div>
    <div className="mt-auto"></div>
    <div className="flex px-8 items-center justify-content pb-52">
      <div className="box-border h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl px-8 ">
        +
      </div>
      <span className="text-4xl px-4 font-abc">VS</span>
      <div className="box-border h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl px-8">
        +
      </div>
    </div>
    <div className="mt-4">
      <div className="py-2">
        <Button onClick={handleRandom} className="font-abc">
          Slumpa
        </Button>
      </div>
      <div className="py-2">
        <Button onClick={handleStartGame} className="font-abc">
          Starta match
        </Button>
      </div>
    </div>
  </div>
);

export default playerSelection;
