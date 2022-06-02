import { useEffect, useState } from "react";
import SwipeButtons from "./SwipeButtons";

const SwipeProfile = (props) => {
    
    return (
        <div>
            {props.arr.map((character) => {
              return (
                  <div className="profile">
             <img src={character.image} className="imageProfil" alt="profil"/> 
            {console.log(character)}
            <h3>{character.name} <span>{ character.dateCreate ? (-(character.dateCreate) + character.dateDestroy) : ( -(character.born)  + character.died) } </span> 
            </h3>
            <h2> Sexe </h2>
            <p>{character.gender}</p>
            <h2>A propos</h2>
            <ul>
                {character.affiliations.map((affliation, index) => <li>{affliation}</li>)} 
            </ul>
            <h2>Position</h2>
            <p>{character.homeworld}</p>
            <SwipeButtons profile={false} arr={character} />
                </div>
              )
            })}
        </div>
    )
}; 

export default SwipeProfile;