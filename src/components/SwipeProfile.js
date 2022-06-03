import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
            <img src={character.image} alt="profil"/> 
            <div className='profileBox'>
                <h3>{character.name} <span>{ character.dateCreate ? (-(character.dateCreate) + character.dateDestroy) : ( -(character.born)  + character.died) } </span> 
                </h3>
                <p>{character.gender}</p>
                <h2>À propos</h2>
                <ul>
                    {/* {character.affiliations.map((affliation, index) => <li key={index}>{affliation}</li>)}  */}
                </ul>
                <h2>Position</h2>
                <p>{character.homeworld}</p>
            </div>
            <SwipeButtons profile={false} nbr={id} />
        </div>
    )
};

export default SwipeProfile;
