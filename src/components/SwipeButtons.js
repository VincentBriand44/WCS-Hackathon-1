import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import allowImg from '../styles/img/swipe/allow.png';
import denyImg from '../styles/img/swipe/deny.png';
import profileImg from '../styles/img/swipe/profile.png';

const SwipeButtons = (props) => {
   
  const randomTestMatch = () => {
    if (props.randomise === props.character.id) {
      
    props.setItsMatch(true)
    } 
  }

  
  return (
    <div className="swipeButtons">
      {props.profile &&
        <a href={`#slides__${props.nbr + 1}`}>
          <img src={denyImg} alt="deny" draggable={false} />
        </a>
      }
      {props.profile ?
        <Link to={`/app/${props.nbr + 1}`}>
          <img src={profileImg} alt="profile" draggable={false} />
        </Link> : 
        <Link to={`/app#slides__${props.nbr}`}>
          <img src={profileImg} alt="profile" draggable={false} />
        </Link>
      } 
      {
        props.itsMatch ? 
          <Link to={`/app/itsmatch/${props.character.id}`} >
            <img src={allowImg} alt="allow" draggable={false} />
          </Link>
        : props.profile && <a href={`#slides__${props.nbr + 1}`}>
            <img src={allowImg} alt="allow" draggable={false} onClick={randomTestMatch } />
          </a>
      }
    </div>
  )
};

export default SwipeButtons;
