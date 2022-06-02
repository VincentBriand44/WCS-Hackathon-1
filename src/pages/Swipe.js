import { useState, useEffect} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SwipeImage from "../components/SwipeImage";
import SwipeProfile from "../components/SwipeProfile";


const Swipe = () => {
  const [ profile, setProfile ] = useState(true);
  
  const [ characters, setCharacters ] = useState([]);
  console.log(characters)
  useEffect(()=>{
    fetch("https://github.com/Miadil/starwars-api/blob/master/api/all.json")
    .then((res) => res.json())
    .then((res)=> setCharacters(res))
  }, [])
  return (
    <div className="swipe">
     {profile ? <SwipeProfile arr={characters} /> :
     <>
      <Header />
      <SwipeImage profile={setProfile} />
      <Footer /> 
     </>
     }
      
     
    </div>
  );
};

export default Swipe;
