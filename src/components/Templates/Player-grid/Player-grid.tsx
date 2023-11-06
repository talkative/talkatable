// import Button from "@components/atoms/Button";

// const players = [
//   {
//     name: "Pamp",
//     src: "Pamp.png",
//     points: 11,
//   },
//   {
//     name: "Anton",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Max",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Clara",
//     src: "Pamp.png",
//     points: 11,
//   },
//   {
//     name: "Rebecka",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Liam",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Simon",
//     src: "Pamp.png",
//     points: 11,
//   },
//   {
//     name: "Maria",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Lisa",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Sara",
//     src: "Pamp.png",
//     points: 11,
//   },
//   {
//     name: "Olivia",
//     src: "Anton.png",
//     points: 1,
//   },
//   {
//     name: "Mackan",
//     src: "Anton.png",
//     points: 1,
//   },
// ];
// export function handleGoBack() {
//   console.log("Tillbaka");
// }

// export const PlayerGrid = (
//   <div className="bg-background-color w-screen h-screen p-4">
//     <div className="text-2xl pt-8 text-center text-white">
//       <h1>Välj spelare</h1>
//     </div>
//     <div className="grid grid-cols-3 gap-11 px-4 pt-6">
//       {players.map((player) => (
//         <div className="flex flex-col text-center" key={player.name}>
//           <img src={player.src} className="object-cover rounded-full" />
//           <span className="py-1">{player.name}</span>
//         </div>
//       ))}
//     </div>
//     <div className="px-6 py-2 pt-8">
//       <Button onClick={handleGoBack}>Tillbaka</Button>
//     </div>
//   </div>
// );
