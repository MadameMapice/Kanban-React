import React from 'react';

function Compte(props){
    return (
        
        <div className='compte'>
             
                    <div className='profil'>
                    <i class="fas fa-laugh-beam"></i>
                    </div>

                    <div>
                        <input type='text' placeholder='Nom'/>
                    </div>
                    
                    <div>
                        <input type='text' placeholder='Prenom'/>
                    </div>
    
                    <div>
                        <input type='text' placeholder='Email'/>
                    </div>
    
                    <div>
                        <input type='text' placeholder='Mot clé'/>
                    </div>
    
                    <button>Modifier</button>
        </div>

    )
}

export default Compte;