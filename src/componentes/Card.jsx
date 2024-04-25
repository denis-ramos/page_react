import React from "react";
import UserDetails from "./UserDetails";
import Picture from "./Picture";
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  const user = props.user;
  return (
    <NavLink to={`/character?id=${user.id}`} >
      <div className="contenedorCarta">
        <Picture user={user} />
        <UserDetails user={user} />
      </div>
    </NavLink>
  );
}

export default Card;
