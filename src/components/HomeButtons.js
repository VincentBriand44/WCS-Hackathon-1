import {Link} from "react-router-dom"

const HomeButtons = () => {
    return (
      <div className="homeButtons">
       <Link to="/app/inscription">< a className="button"><strong>Creer un compte</strong></a></Link> 
        
       <Link to="/app">< a className="button" href=""><strong>Connexion</strong></a></Link>
       
      </div>
    );
  };
  
  export default HomeButtons;
  