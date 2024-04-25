import React from 'react'
import "./Picturecharacter.css";
function picturecharacter(props) {
    const user = props.user;
  return (
    <div className="contenedorImagencharacter">
    <img className="imagencharacter" src={user.image} alt="Avatar" />
  </div>
  )
}

export default picturecharacter