import { useEffect, useState } from "react";
import SwipeButtons from "./SwipeButtons";

const SwipeProfile = (props) => {
    
    return (
        <div>
            {props.arr.map((character) => {
              return (
                  <div className="profile">
            <img className="imageProfil" alt="profil">{character.image}</img>
            <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" class="Sq(52px)"><g transform="translate(2 2)" fill-rule="nonzero" fill="none"><circle fill="var(--fill--background-brand-gradient, none)" cx="10" cy="10" r="10"></circle><path d="M9.35 14.561l-.895-1.09-1.301-1.587-.894-1.09c-.358-.437-.19-.794.375-.794h1.733c.096-.661.403-3.178.484-3.732.096-.66.516-1.147 1.146-1.147h.003c.63 0 1.05.487 1.147 1.147.08.554.387 3.071.484 3.732h1.732c.565 0 .734.357.376.793l-.894 1.09-1.302 1.588-.894 1.09c-.357.437-.943.437-1.3 0" fill="var(--color--white, inherit)"></path></g></svg>
            <h3>{character.name} <span>{} </span> </h3>
            <h2> Sexe </h2>
            <p>{character.gender}</p>
            <h2>A propos</h2>
            <p>{character.affiliation}</p>
            <h2>Position</h2>
            <p>{character.homeword}</p>
            <SwipeButtons profile={false} />
                </div>
              )
            })}
        </div>
    )
}; 

export default SwipeProfile;