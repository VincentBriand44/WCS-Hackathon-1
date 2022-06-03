import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SwipeButtons from "./SwipeButtons";

const SwipeProfile = (props) => { 
    const params = useParams();
    const [ character, setCharacter ] = useState([]);
    const id = params.id;
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Miadil/starwars-api/master/api/id/${id}.json`)
        .then((res) => res.json())
        .then((res) => setCharacter(res))
    }, [])
    return (
        <div className="profile">
            <img src={character.image} className="imageProfil" alt="profil"/> 
            
            <h3>{character.name} <span>{ character.dateCreate ? (-(character.dateCreate) + character.dateDestroy) : ( -(character.born)  + character.died) } </span> 
            </h3>
            <h2> Sexe </h2>
            <p>{character.gender}</p>
            <h2>À propos</h2>
            <ul>
                {/* {character.affiliations.map((affliation, index) => <li key={index}>{affliation}</li>)}  */}
            </ul>
            <h2>Position</h2>
            <p>{character.homeworld}</p>
            <SwipeButtons profile={false} nbr={id} />
        </div>
    )
};

export default SwipeProfile;
