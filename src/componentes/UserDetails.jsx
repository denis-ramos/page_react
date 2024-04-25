import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  
  const user = props.user;
  console.log(user)
  return (
    <div className="contenedor">
      <div className="contenedorLetras">
        <h1 className="datos">name: {user.name}</h1>
        <h1 className="datos">status: {user.status}</h1>
        <h1 className="datos">species: {user.species}</h1>
        <h1 className="datos">type: {user.type}</h1>
        <h1 className="datos">gender: {user.gender}</h1>
      </div>
    </div>
  );
};

export default UserDetails;
