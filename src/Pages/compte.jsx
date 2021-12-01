import React from 'react';
import {useState} from 'react'

function Compte(props){

    const[nom, setNom] = useState('')
    const[prenom, setPrenom] = useState('')
    const[email, setEmail] = useState('')
    const[mdp, setMdp] = useState('')
    const[mdpc, setMdpc] = useState('')

    function submitForm(event) {
        event.preventDefault()
        // console.log(login);
        
    }

    return (
        
        <form className='compte' onSubmit={submitForm}>
             
                    <div className='profil'>
                    <i class="fas fa-laugh-beam"></i>
                    </div>

                    <div>
                        <input type='text' placeholder='Nom' value = {nom} onChange = { (event) => {

                        setNom(event.target.value)

                        }}/>
                    </div>
                    
                    <div>
                        <input type='text' placeholder='Prenom' value = {prenom} onChange = { (event) => {

                        setPrenom(event.target.value)

                        }}/>
                    </div>
    
                    <div>
                        <input type='text' placeholder='Email' value = {email} onChange = { (event) => {

                        setEmail(event.target.value)

                        }}/>
                    </div>
    
                    <div>
                        <input type='password' placeholder='Mot de passe' value = {mdp} onChange = { (event) => {

                        setMdp(event.target.value)

                        }}/>
                    </div>
    
                    <button type='submit'>Modifier</button>
        </form>

    )
}

export default Compte;