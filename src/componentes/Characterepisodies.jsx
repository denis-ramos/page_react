import React from "react";
import { useEffect, useState } from "react";
import Episode from "./Episode";
import "./Characterepisodies.css";
function Characterepisodies(props) {
  const episodiostools = props.user;
  const episodio = episodiostools["episode"];
  const [episodios,setEpisodios]= useState([]);

  console.log(episodio);
  useEffect(() => {
    const fetchEpisodes = async () => {
      if (!Array.isArray(episodio)) {
        return; // Salir si episodio no es un array
      }
  
      const data = await Promise.all(
        episodio.slice(0, 5).map(url =>
          fetch(url).then(response => response.json())
        )
      );
      setEpisodios(data);
    };
  
    fetchEpisodes();
  }, [episodio])

  return (
    <div className="contenedorepisodies">
      {episodios.map((episodio, index) => (
        <Episode key={index} user={episodio} />
      ))}
    </div>
  );
}


export default Characterepisodies;
