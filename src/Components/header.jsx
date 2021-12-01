import React from 'react';
import {Link} from 'react-router-dom'

function Header(props){
    return (
        <header>
      
      <div className='App-header flex justify-sb'>
        <div className='titre flex'>
          <h1>
            Mes Taches 
          </h1><i class="fas fa-pencil-alt"></i>
        </div>

        <div className='conexion'>
            <Link to="/">Connexion</Link>
            <Link to="kanban">Kanban</Link>
            <Link to="inscription">Inscription</Link>
            <Link to="mon-compte">Mon Compte</Link>
        </div>

        </div>

      </header>
    )
}

export default Header;