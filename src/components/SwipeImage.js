import { useEffect, useState } from 'react';
import SwipeButtons from '../components/SwipeButtons';
import SwipeDesc from '../components/SwipeDesc';


const SwipeImage = (props) => {
  const [ characters, setCharacters ] = useState([]);
  useEffect(() => {
      fetch(`https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json`)
      .then((res) => res.json())
      .then((res) => console.log(characters) || setCharacters(res))
    }, [])
  return (
  <div className="swipeImage">
    <div className="swipeImages">
      {characters.map((character, index) => (
        <div key={index} className="background" id={`slides__${index}`} style={{ backgroundImage:`url(${character.image !== null && character.image})` }} >
          <SwipeDesc arr={character} />
          <SwipeButtons profile={props.profile} nbr={index} />
        </div>
      ))}
    </div>
  </div>
  
); 
}

export default SwipeImage;
