import React from 'react'
import RegisterForm from './RegisterForm'

const RegisterContainer = (props) => {
  const { handleBeginPlayClick } = props;
  return (
    <div className="register-container">
      <h3>Pick A Weapon</h3>

      <RegisterForm handleBeginPlayClick={handleBeginPlayClick} />
    </div>
  )
}

export default RegisterContainer
