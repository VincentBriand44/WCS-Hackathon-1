import Footer from "../components/Footer";
import Header from "../components/Header";
import SwipeImage from "../components/SwipeImage";
import SwipeProfile from "../components/SwipeProfile";


const Swipe = () => {
  const [ profile, setProfile ] = useState(false);
  
  const [ characters, setCharacters ] = useState([]);
 
  
  useEffect(()=>{
    console.log("test")
    fetch("https://raw.githubusercontent.com/Miadil/starwars-api/master/api/all.json")
    .then((res) => res.json())
    .then((res)=>  setCharacters(res))
  }, [])
  return (
const Swipe = () => (
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

export default Swipe;
