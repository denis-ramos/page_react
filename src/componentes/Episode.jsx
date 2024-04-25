import React from "react";
import "./Episode.css";
function Episode(props) {
  const episodio_date = props.user;
  console.log(props);
  return (
    <div className="contendedorepisodios">
      <h3>{episodio_date.name}</h3>
      <h3>{episodio_date.episode}</h3>
      <h3>{episodio_date.air_date}</h3>
    </div>
  );
}

export default Episode;
