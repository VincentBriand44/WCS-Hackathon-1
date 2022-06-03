import { Link } from "react-router-dom";
import swipImg from "../styles/img/footer/swip.png"
import matchesImg from "../styles/img/footer/matches.png"
import profilImg from "../styles/img/footer/profil2.png"
import settingsImg from "../styles/img/footer/settings.png"

const Footer = () => {
  return (
    <nav className="footer"> 
      <Link to="/app"> <img src={swipImg} alt=""/><span>Swipe</span> </Link>
      <Link to="/app/matches"><img src={matchesImg} alt=""/><span>Matches</span></Link>
      <Link to="/app/profile"><img src={profilImg} alt=""/><span>Profile</span></Link>
      <Link to="/app/settings"><img src={settingsImg} alt=""/><span>Settings</span></Link>
    </nav>

);

};

export default Footer;
