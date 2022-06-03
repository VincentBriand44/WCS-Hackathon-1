import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SwipeImage from "../components/SwipeImage";
import SwipeProfile from "../components/SwipeProfile";


const Swipe = () => {
  const [ profile, setProfile ] = useState(false);
  const [ characterCount, setCharactersCount ] = useState(1);

  return (
    <div className="swipe">
      {profile ? <SwipeProfile nbr={characterCount} /> :
      <>
        <Header />
        <SwipeImage profile={setProfile} nbr={characterCount} />
        <Footer /> 
      </>
      }
    </div>
  );
};

export default Swipe;
