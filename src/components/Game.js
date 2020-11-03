import React, { useState } from 'react';
import Box from "./Box";

const isWinner = (arrSol) => {
  if (arrSol[0] + arrSol[1] + arrSol[2] === 3) {
    return true;
  }
  if (arrSol[3] + arrSol[4] + arrSol[5] === 3) {
    return true;
  }
  if (arrSol[6] + arrSol[7] + arrSol[8] === 3) {
    return true;
  }
}

const Game = (props) => {

  const { player, handleInPlay } = props;
  const [currentInPlay, setCurrentInPlay] = useState(player.firstInPlay);
  const [solZero, setSolZero] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [solEquis, setSolEquis] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [winner, setWinner] = useState("");

  const handleBoxClick = (pos) => {
    if (currentInPlay === 'x') {
      // Guarda la jugada del jugador PlayerOne X
      let newSolArr = [...solEquis];
      newSolArr[pos - 1] = 1;
      setSolEquis(newSolArr);
      // Reviso si es una jugada ganadora
      if (isWinner(newSolArr)) {
        console.log("gano PlayerOne")
      }
      else {
        // En caso que no sea ganadora, turno del proximo jugador
        setCurrentInPlay('o');
        handleInPlay(player.playerTwo + ': o');
      }
    }
    else {
      let newSolArr = [...solZero];
      newSolArr[pos - 1] = 1;
      setSolZero(newSolArr)
      if (isWinner(newSolArr)) {
        console.log("gano PlayerTwo")
      }
      setCurrentInPlay('x');
      handleInPlay(player.playerOne + ': x');
    }
  }

  return (
    <div className="grid-game" >
      <Box position={1} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={2} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={3} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={4} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={5} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={6} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={7} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={8} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
      <Box position={9} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} />
    </div >
  )
}

export default Game
