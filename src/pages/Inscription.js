import Footer from "../components/Footer";
import Header from "../components/Header";
import React, {useState} from 'react';
import { Link } from "react-router-dom";

   
    function Inscription () {
                const [nameInput, setnameInput] = useState('');
                const [fnameInput, setfnameInput] = useState('');
                const [ageInput, setageInput] = useState('');
                const [cityInput, setcityInput] = useState('');
                const [speciesInput, setspeciesInput] = useState('');
                const [genderInput, setgenderInput] = useState('');
           
                const  input=(e)=> {
                e.preventDefault ();
                console.log(`${nameInput}:${fnameInput}:${ageInput}:${cityInput}:${speciesInput}:${genderInput}`);
        };
        return (
        <div className="globalForm"> 
        <Header />   
        <div className="toto">    
          
         <form>
          <div>  
            <label htmlFor="name">
              <input
                className="criteres"
                type="text"
                name="name"
                id="name"
                placeholder="Bly"
                value={nameInput}
                onChange={(e) => setnameInput(e.target.value)}
              />
            </label>
           </div>
           <div> 
            <label htmlFor="fname">
              <input
                className="criteres"
                type="text"
                name="first name"
                id="first name"
                placeholder="Bee"
                value={fnameInput}
                onChange={(e) => setfnameInput(e.target.value)}
              />
            </label>
           </div>
           <div>
            <label htmlFor="age">
              
              <input
                className="criteres"
                type="text"
                name="age"
                id="age"
                placeholder="53"
                value={ageInput}
                onChange={(e) => setageInput(e.target.value)}
              />
            </label>
           </div>
           <div>
            <label htmlFor="City">
              
              <input
                className="criteres"
                type="text"
                name="city"
                id="city"
                placeholder="Kamino"
                value={cityInput}
                onChange={(e) => setcityInput(e.target.value)}
              />
            </label>
           </div>
           <div>
            <label htmlFor="Species">
              
              <input
                className="criteres"
                type="text"
                name="species"
                id="Species"
                placeholder="Optionnal"
                value={speciesInput}
                onChange={(e) => setspeciesInput(e.target.value)}
              />
            </label>
           </div>
           <div> 
            <label htmlFor="Gender">
              
              <input
                className="criteres"
                type="text"
                name="Gender"
                id="Gender"
                placeholder="Female"
                value={genderInput}
                onChange={(e) => setgenderInput(e.target.value)}
              />
            </label>
           </div>
           <Link to="/app"> 
            {/* <button type="submit" onClick={input}> */}
            <button className="btn">
              Submit
            </button></Link>
          </form>
        </div>
        </div>
        );
    };
 
    
    
export default Inscription;