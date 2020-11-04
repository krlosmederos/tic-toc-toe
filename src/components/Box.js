import React, { useState } from 'react'

const Box = (props) => {
  const { position, handleBoxClick, currentInPlay, activePlay } = props;

  const [contentBox, setContentBox] = useState("");

  const handleClick = (e) => {
    if (contentBox === '' && activePlay) {
      setContentBox(currentInPlay);
      handleBoxClick(e.currentTarget.id);
    }
  }
  return (
    <div id={position} className="box" onClick={handleClick}>
      {contentBox}
    </div>
  )
}

export default Box
