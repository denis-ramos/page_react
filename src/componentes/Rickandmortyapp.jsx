import React from 'react'
import { useEffect, useState } from "react";
import Cardcharacter from "./Cardcharacter";
import { useSearchParams } from "react-router-dom";

     // Puedes ajustar el rango según tus necesidades
 
function Rickandmortyapp() {
    const [users, setUsers] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    const id=searchParams.get("id")
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        });
    }, []);
    console.log(users);
  return (
    <div>
      <Cardcharacter key={users.id} user={users} />
  </div>
  )
}

export default Rickandmortyapp