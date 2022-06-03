import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import iconSaber from "../styles/img/logo.png"

const ItsMatch = (props) => {
      const [character, setCharacter] = useState({});

    const { id } = useParams();
    useEffect(() => {
         console.log(id)
      fetch(`https://raw.githubusercontent.com/Miadil/starwars-api/master/api/id/${id}.json`)
      .then((res) => res.json())
      .then((res) => console.log('ddd',res) || setCharacter(res))
  }, [])
    return (
        <div className="firstmatch"> 
        <div className="logomatch">
        <img src={iconSaber}/>
        <h1>Star Love</h1>
            </div>
            <img src={character.image} alt=""/>
        <div className="newmatch">
           
            <span>M</span>
            <span>A</span>
            <span>T</span>
            <span>C</span>
            <span>H</span>
               <br></br>
            <span>!</span>
        </div>
        </div>
    )
}
export default ItsMatch;
