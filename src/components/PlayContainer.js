import React, { useState } from 'react'
import Game from './Game'

const PlayContainer = (props) => {
  const { player } = props;

  const [inPlay, setInPlay] = useState(player.firstInPlay)
  const [winner, setWinner] = useState("");

  const handleWinner = (win) => {
    setWinner(win);
  }

  const handleInPlay = (p) => {
    setInPlay(p);
  }

  const [tmp, setTmp] = useState(0);
  return (
    <div className="main-container">

      <h3> {winner !== "" ? `${winner} win!!!` : `It is ${inPlay.toUpperCase()} turn!`}</h3>
      <button onClick={() => { setTmp((p) => p + 1) }}>Start over</button>
      <div className="play-container">
        <Game player={player} handleInPlay={handleInPlay} handleWinner={handleWinner} />
      </div>
    </div>
  )
}

export default PlayContainer
