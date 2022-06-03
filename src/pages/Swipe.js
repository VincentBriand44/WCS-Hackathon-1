import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SwipeImage from "../components/SwipeImage";
import SwipeProfile from "../components/SwipeProfile";
import { useRef } from react;


const Swipe = () => {
  const [ profile, setProfile ] = useState(false);
  
  const [ characters, setCharacters ] = useState([]);
 
  
  useEffect(()=>{
   
    fetch("https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json")
    .then((res) => res.json())
    .then((res)=>  setCharacters(res))
  }, [])

  

  return (

    <div className="swipe">
      {profile ? <SwipeProfile nbr={characterCount} /> :
      <>
        <Header />
        <SwipeImage profile={setProfile} 
        
       
        />
        <Footer /> 
      </>
      }
    </div>
  );
}

export default Swipe;
