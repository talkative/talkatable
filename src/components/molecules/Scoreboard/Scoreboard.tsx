export const scoreboard = (
  <div className="flex w-full">
    {players.map((player) => (
      <div
        className="flex w-full items-center justify-around border-2 border-white bg-green-900 aspect-[1/1] text-white"
        key={player.name}
      >
        <button type="button" className="p-4">
          <span className="text-3xl">-</span>
        </button>
        <h1 className="text-8xl">{player.points}</h1>
        <button type="button" className="p-4">
          <span className="text-3xl">+</span>
        </button>
      </div>
    ))}
  </div>
);

export default scoreboard;
