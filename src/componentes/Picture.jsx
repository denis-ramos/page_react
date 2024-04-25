import React from "react";
import "./Picture.css";
function Picture(props) {
  const user = props.user;
  return (
    
    <div className="contenedorImagen">
      <img className="imagen" src={user.image} alt="Avatar" />
    </div>
  );
}

export default Picture;
