import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SwipeButtons from "../components/SwipeButtons";


const Matches = (props) => {
    
    return (
        <div>
            <Header/>
            {props.arr.map((character) => {
                <ul>
                {character.matches.map((match, index) => <li>{match}</li>)} 
                </ul>

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
            <Footer/>
        </div>
    )
}; 

export default Matches;