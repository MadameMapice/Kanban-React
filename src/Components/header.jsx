import React  from 'react';
import {Link} from 'react-router-dom'
import {useState, useEffect,useContext} from 'react'
import {UserContexte} from '../Contexte/usercontexte'

function Header(props){
  const {userId, setuserId}= useContext(UserContexte)
  let aff
  if(userId==""){
    aff=<div className='conexion'>
    <Link to="/">Connexion</Link>
    <Link to="inscription">Inscription</Link>
    </div>
  }
  else{
    aff=<div className='conexion'>
    <Link to="kanban">Kanban</Link>
    <Link to="mon-compte">Mon Compte</Link>
    <Link to="deconnexion">Deconnexion</Link>
</div>
  }
    return (
        <header>
      
      <div className='App-header flex justify-sb'>
        <div className='titre flex'>
          <h1>
            Mes Taches 
          </h1><i className="fas fa-pencil-alt"></i>
        </div>

       {aff}

        </div>

      </header>
    )
}

export default Header;

