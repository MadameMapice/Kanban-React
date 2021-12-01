import React from 'react';
import {Link} from 'react-router-dom'

function Login(props){
    return (
        
        <div className='log'>
            <div className="flexB">
            <label for='nom'>Nom : </label>
            <input type='nom'/></div>
            
            <div className="flexB">
            <label for='mot clé'>Mot clé </label>
            <input type='mot clé'/>
            </div>
            <button>Connexion</button>
            
            <div className="inscription flex">
                <p>Pas de compte?</p>
                <Link to='inscription'>Inscrivez-vous</Link>
            </div>

        </div>

    )
}

export default Login;