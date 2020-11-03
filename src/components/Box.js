import React, { useState } from 'react'

const Box = (props) => {
  const { position, handleBoxClick, currentInPlay } = props;

  const [contentBox, setContentBox] = useState("");

  const handleClick = (e) => {
    if (contentBox === '') {
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
