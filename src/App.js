import React, { useState } from 'react';
import './App.css';
import PlayContainer from './components/PlayContainer';
import RegisterContainer from './components/RegisterContainer';

function App() {

  // objeto, funcion que modifica el objeto
  const [player, setPlayer] = useState({
    playerOne: "",
    playerTwo: "",
    playing: false,
    firstInPlay: "",
  });

  const handleBeginPlayClick = (playerOne, playerTwo, firstInPlay) => {
    if (playerOne.trim() !== '' && playerTwo.trim() !== '') {
      setPlayer({
        playerOne: playerOne,
        playerTwo: playerTwo,
        playing: true,
        firstInPlay: firstInPlay,
      });
    }
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe in React.js</h1>
      { player.playing
        ? <PlayContainer player={player} />
        : <RegisterContainer handleBeginPlayClick={handleBeginPlayClick} />
      }
    </div>
  );
}

export default App;
