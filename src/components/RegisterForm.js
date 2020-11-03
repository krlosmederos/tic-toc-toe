import React, { useState } from 'react'

const RegisterForm = (props) => {

  const { handleBeginPlayClick } = props;

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "playerOne") {
      setPlayerOne(e.target.value)
    }
    else {
      setPlayerTwo(e.target.value)
    }
  }

  return (
    <div className="register-form">
      <h3>Choose Your Weapon</h3>
      <div>
        <input name="playerOne" value={playerOne} placeholder="Player 1 username" onChange={handleChange} />
        <input name="playerTwo" value={playerTwo} placeholder="Player 2 username" onChange={handleChange} />
      </div>
      <div className="container-btn">
        <div className="div-middle">
          <button className="btn-register x" onClick={() => handleBeginPlayClick(playerOne, playerTwo, 'x')}>X</button>
        </div>
        <div className="div-middle">
          <button className="btn-register o" onClick={() => handleBeginPlayClick(playerOne, playerTwo, 'o')}>O</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
