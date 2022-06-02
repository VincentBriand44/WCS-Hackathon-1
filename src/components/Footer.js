import { Link } from "react-router-dom";
import swipImg from "../styles/img/footer/swip.png"
import matchesImg from "../styles/img/footer/coeur.png"
import profilImg from "../styles/img/footer/profil.png"
import settingsImg from "../styles/img/footer/settings.png"

const Footer = () => {
  return (
    <nav className="footer"> 
      <Link to="/app"> <img src={swipImg} alt=""/></Link>
      <Link to="/app/matches"><img src={matchesImg} alt=""/></Link>
      <Link to="/app/profil"><img src={profilImg} alt=""/></Link>
      <Link to="/app/settings"><img src={settingsImg} alt=""/></Link>
    </nav>

);

};

export default Footer;
