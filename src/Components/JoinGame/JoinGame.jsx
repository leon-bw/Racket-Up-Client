import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import "./JoinGame.scss";
import { MdDateRange } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import JoinButton from "../JoinButton/JoinButton";
import { GiTennisCourt } from "react-icons/gi";

const JoinGame = () => {
  const [addPlayer, setAddPlayer] = useState(
    <JoinButton onSelect={() => handleSelect()}>
      <CiCirclePlus className="player__icon" />
    </JoinButton>
  );

  const users = [
    {
      id: 1,
      avatar: "J",
      firstName: "John",
      skillLevel: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 2,
      avatar: "A",
      firstName: "Alice",
      skillLevel: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 3,
      avatar: "M",
      firstName: "Michael",
      skillLevel: Math.floor(Math.random() * 5) + 1,
    },
    {
      id: 4,
      avatar: "S",
      firstName: "Sophia",
      skillLevel: Math.floor(Math.random() * 5) + 1,
    },
  ];

  const handleSelect = () => {
    setAddPlayer(
      <>
        <div className="player__avatar">J</div>
        <div className="player__details">
          <div className="player__name">John</div>
          <div className="player__level">Level: 3</div>
        </div>
      </>
    );
    console.log(addPlayer);
  };

  return (
    <section className="game">
      <div className="game__container">
        <h1 className="game__heading">Join Game</h1>
        <div className="game__header">
          <h3 className="game__date">
            {" "}
            <span className="game__icon">
              <MdDateRange />
            </span>{" "}
            10/10/2024
          </h3>
          <h3 className="game__location">
            <span className="game__icon">
              <GiTennisCourt />
            </span>{" "}
            Tennis Courts, LDN
          </h3>
          <h3 className="game__duration">
            <span className="game__icon">
              <MdTimer />
            </span>{" "}
            2 hrs
          </h3>
        </div>
        <div className="game__court">
          <div className="game__court-half">
            <motion.div className="game__court-player">
              <div className="player">{addPlayer}</div>
            </motion.div>
            <motion.div className="game__court-player">
              <div className="player">{addPlayer}</div>
            </motion.div>
          </div>
          <div className="game__court-divider"></div>
          <div className="game__court-half">
            <motion.div className="game__court-player">
              <div className="player">{addPlayer}</div>
            </motion.div>
            <motion.div className="game__court-player">
              <div className="player">{addPlayer}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinGame;

// const controls = useDragControls();
// const startDrag = (e) => {
//   controls.start(e);
// };

// {
//   onPointerDown={startDrag}

//   drag="y"
//   dragControls={controls}
// }

// const JoinGame = () => {
//   const initialPlayers = [
//     { id: 1, name: '', level: '' },
//     { id: 2, name: '', level: '' },
//     { id: 3, name: '', level: '' },
//     { id: 4, name: '', level: '' }
//   ];

//   const [players, setPlayers] = useState(initialPlayers);

//   const handleJoinGame = (id) => {

//     const playerData = [
//       { name: 'John', level: 3 },
//       { name: 'Alice', level: 4 },
//       { name: 'Michael', level: 2 },
//       { name: 'Sophia', level: 5 }
//     ];

//     const updatedPlayers = players.map(player =>
//       player.id === id ? { ...player, ...playerData[id - 1] } : player
//     );
//     setPlayers(updatedPlayers);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//       {players.map(player => (
//         <div key={player.id} style={{ width: '200px', height: '200px', border: '1px solid black', padding: '10px', margin: '10px' }}>
//           {player.name ? (
//             <>
//               <div>Name: {player.name}</div>
//               <div>Level: {player.level}</div>
//             </>
//           ) : (
//             <button onClick={() => handleJoinGame(player.id)}>Join Game</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JoinGame;
