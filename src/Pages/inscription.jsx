import React from 'react';
import {useState} from 'react'

function Inscription (props){

    const[nom, setNom] = useState('')
    const[prenom, setPrenom] = useState('')
    const[email, setEmail] = useState('')
    const[mdp, setMdp] = useState('')
    const[mdpc, setMdpc] = useState('')

    function submitForm(event) {
        event.preventDefault()
        // console.log(nom);
        
    }
    return (
        
            
            <form className='form'onSubmit={submitForm}>
                    
                <div className="flexB">
                    <label htmlFor='nom'>Nom : </label>
                    <input type='text' id='nom' value = {nom} onChange = { (event) => {

                    setNom(event.target.value)

                    }}/>

                </div>
                
                <div className="flexB">
                    <label htmlFor='prenom'>Prenom : </label>
                    <input type='text' id='prenom' value = {prenom} onChange = { (event) => {

                    setPrenom(event.target.value)

                    }}/>

                </div>

                <div className="flexB">
                    <label htmlFor='email'>Email : </label>
                    <input type='text' id='email' value = {email} onChange = { (event) => {

                    setEmail(event.target.value)

                    }}/>

                    </div>

                <div className="flexB">
                    <label htmlFor='mdp'>Mot de Passe : </label>
                    <input type='text' id='mdp' value = {mdp} onChange = { (event) => {

                    setMdp(event.target.value)

                    }}/>

                    </div>

                    <div className="flexB">
                    <label for='mdpc'>Comfirmer le Mot de Passe : </label>
                    <input type='password' id='mdpc' value = {mdpc} onChange = { (event) => {

                    setMdpc(event.target.value)

                    }}/>

                    </div>

                <button type='submit'>Accepter</button>
            
    
            </form>

    )
}

export default Inscription;