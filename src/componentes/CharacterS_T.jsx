import React from 'react'
import "./CharacterS_T.css"
function CharacterS_T(props) {
  const usertype =props.user
  console.log(usertype)
  return (
    <div className='contenedorS_T'>
      <h1 className='status'>{usertype.status}</h1>
      <h2 className='type'>{usertype.gender}</h2>
      <h1 className="episodios">{"EPISODIES[0,4]"}</h1>
      
    </div>
  )
}

export default CharacterS_T