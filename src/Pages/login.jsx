import React from 'react';
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Login(props){

    const[login, setLogin] = useState('')
    const[pass, setPass]= useState('')

    function submitForm(event) {
        event.preventDefault()
        //  console.log(login);
        
    }

    return (
        
        <form className='log' onSubmit={submitForm}>
            <div className="flexB">
            <label htmlFor='nom'>Nom : </label>
            <input type='text' id='nom' value = {login} onChange = { (event) => {setLogin(event.target.value) }} /></div>
            
            <div className="flexB">
            <label htmlFor='mdp'>Mot de Passe </label>
            <input type='password' id='mdp' value = {pass} onChange = { (event) => {setPass(event.target.value)}}/>
            </div>
            <button type='submit'>Connexion</button>
            
            <div className="inscription flex">
                <p>Pas de compte?</p>
                <Link to='inscription'>Inscrivez-vous</Link>
            </div>

        </form>

    )
}

export default Login;