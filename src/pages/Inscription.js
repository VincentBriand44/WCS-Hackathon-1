import Footer from "../components/Footer";
import Header from "../components/Header";
import React, {useState} from 'react';

   
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
        <> 
        <Header />   
        <div className="toto">    
          
         <form>
          <div>  
            <label htmlFor="name">
              Name :
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Mary"
                value={nameInput}
                onChange={(e) => setnameInput(e.target.value)}
              />
            </label>
           </div>
           <div> 
            <label htmlFor="fname">
              First Name :
              <input
                type="text"
                name="first name"
                id="first name"
                placeholder="Pasici"
                value={fnameInput}
                onChange={(e) => setfnameInput(e.target.value)}
              />
            </label>
           </div>
           <div>
            <label htmlFor="age">
              Age :
              <input
                type="text"
                name="age"
                id="age"
                placeholder="22"
                value={ageInput}
                onChange={(e) => setageInput(e.target.value)}
              />
            </label>
           </div>
           <div>
            <label htmlFor="City">
              City :
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Paname"
                value={cityInput}
                onChange={(e) => setcityInput(e.target.value)}
              />
            </label>
           </div>
           <div>
            <label htmlFor="Species">
              Species :
              <input
                type="text"
                name="species"
                id="Species"
                placeholder="Human"
                value={speciesInput}
                onChange={(e) => setspeciesInput(e.target.value)}
              />
            </label>
           </div>
           <div> 
            <label htmlFor="Gender">
              Gender :
              <input
                type="text"
                name="Gender"
                id="Gender"
                placeholder="Male"
                value={genderInput}
                onChange={(e) => setgenderInput(e.target.value)}
              />
            </label>
           </div>
           
            <button type="submit" onClick={input}>
              Submit
            </button>
          </form>
        </div>
        </>
        );
    };
 
    
    
export default Inscription;