import Footer from "../components/Footer";
import Header from "../components/Header";
import profileImg from "../styles/img/profile/profil.png"
import settingsImg from "../styles/img/footer/settings.png"
import ProfImg from "../styles/img/footer/coeur.png"

function changeName(){
  let name_id= prompt("Entrez votre nom", "votre nom ?");
  document.getElementById("name").innerHTML=name_id;
  let age_id= prompt("Entrez votre age", "votre age ?");
  document.getElementById("age").innerHTML=age_id;
}
function changeGenre(){
  let genre_id= prompt("Entrez votre genre", "votre genre ?");
  document.getElementById("genre").innerHTML=genre_id;
}
function changeAffiliation(){
  let affiliations_id= prompt("Entrez votre affiliation", "votre affiliation ?");
  document.getElementById("affiliations").innerHTML=affiliations_id;
}
function changeDescri(){
  let descri_id= prompt("Entrez votre description", "votre description ?");
  document.getElementById("descri").innerHTML=descri_id;
}
function changePosition(){
  let pos_id= prompt("Entrez votre position actuelle", "votre lieu de recherche ?");
  document.getElementById("pos").innerHTML=pos_id;
}
function changePassion(){
  let passion_id= prompt("Entrez vos passions", "vos passions?");
  document.getElementById("passion").innerHTML=passion_id;
}

const Profile = () => {
  return (
    
    <div className="profileDiv">
      <Header />
      <div className="profileItem">
        <div className="profileImage">
          <img src={ProfImg} alt=""/>
        </div>
        <div className="profileText">
          <h2> 
            <span id="name"> Bly Bee</span> 
            (<span id="age"> 53 </span>.ans)
            <button onClick={changeName}><img src={settingsImg} alt=""/></button>
          </h2> 
          <h3>
            <span>Genre:</span> 
            <button onClick={changeGenre}><img src={settingsImg} alt=""/></button>
          </h3> 
          <p id="genre"> Féminin </p>

          <h3>Affiliations:<button onClick={changeAffiliation}><img src={settingsImg} alt=""/></button></h3>
          <p id="affiliations">République galactique
          </p>
          <h3>A propos:<button onClick={changeDescri}><img src={settingsImg} alt=""/></button></h3>
          <p id="descri">  Veuillez cliquer sur le bouton pour compléter votre profil
          </p>
          <h3>Cités:
            <button onClick={changePosition}><img src={settingsImg} alt=""/></button>
          </h3>
          <p id="pos"> Kamino </p>
          <h3>Passion:
            <button onClick={changePassion} ><img src={settingsImg} alt=""/></button>
          </h3>
          <p id="passion" > Veuillez cliquer sur le bouton pour compléter votre profil </p>
        </div>
      </div>
      <Footer />
    </div>
);

};

export default Profile;
