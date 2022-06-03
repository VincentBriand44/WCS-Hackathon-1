import Footer from "../components/Footer";
import Header from "../components/Header";
import SwipeImage from "../components/SwipeImage";
import SwipeProfile from "../components/SwipeProfile";
import { useRef } from react;


const Swipe = () => {
  const slide = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
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
}

export default Swipe;
