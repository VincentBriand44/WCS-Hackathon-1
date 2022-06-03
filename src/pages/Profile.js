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
  let pos_id= prompt("Entrez votre description", "votre description ?");
  document.getElementById("pos").innerHTML=pos_id;
}
function changePassion(){
  let passion_id= prompt("Entrez votre description", "votre description ?");
  document.getElementById("passion").innerHTML=passion_id;
}

const Profile = () => {
  return (
    
    <div className="profileDiv">
      <Header />
      <div className="profileItem">
        <img src={ProfImg} alt=""/>
        <div className="profileText">
          <h2> 
            <span id="name">Bly (CC-5052)</span> 
            (<span id="age">53 </span>.ans)
            <button onClick={changeName}><img src={settingsImg} alt=""/></button>
          </h2> 
          <h3>
            <span>Genre:</span> 
            <button onClick={changeGenre}><img src={settingsImg} alt=""/></button>
          </h3> 
          <p id="genre"> Homme</p>

          <h3>Affiliations:<button onClick={changeAffiliation}><img src={settingsImg} alt=""/></button></h3>
          <p id="affiliations">République galactique
          </p>
          <h3>A propos:<button onClick={changeDescri}><img src={settingsImg} alt=""/></button></h3>
          <p id="descri">  Figurant parmi les innombrables soldats clones développés et entraînés sur Kamino pour servir dans les rangs de la République Galactique pour contrer la menace de la Confédération des Systèmes Indépendants, le Commandant clone Bly se distinguait de la masse des clones. Il était notamment l'un des rares à posséder un nom et pas seulement un matricule, mais aussi à avoir développé au cours de la guerre un système de pensée plus autonome. Bly faisait partie des commandants clones qui reçurent le dur entraînement des Commandos de Reconnaissance Avancée, sous la houlette du commando Alpha-17, et il était par conséquent un soldat aguerri et capable de faire face à toutes les situations, contrairement à la plupart des soldats clones qui n'ont qu'une liberté de pensée très limitée, voire inexistante.
          </p>
          <h3>Position:
            <button onClick={changePosition}><img src={settingsImg} alt=""/></button>
          </h3>
          <p id="pos"> Kamino </p>
          <h3>Passion:
            <button onClick={changePassion} ><img src={settingsImg} alt=""/></button>
          </h3>
          <p id="passion" > Casser du droides, les pancakes et l'odeur du napalm au petit matin</p>
        </div>
      </div>
      <Footer />
    </div>
);

};

export default Profile;