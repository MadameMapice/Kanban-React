import React from 'react';

function Inscription (props){
    return (
        
            
            <div className='form'>
                    
                <div className="flexB">
                    <label for='nom'>Nom : </label>
                    <input type='nom'/>
                </div>
                
                <div className="flexB">
                    <label for='prenom'>Prenom : </label>
                    <input type='prenom'/>
                </div>

                <div className="flexB">
                    <label for='email'>Email : </label>
                    <input type='email'/>
                    </div>

                <div className="flexB">
                    <label for='mot clé'>Mot clé : </label>
                    <input type='mot clé'/>
                    </div>

                <button>Accepter</button>
            
    
            </div>

    )
}

export default Inscription;