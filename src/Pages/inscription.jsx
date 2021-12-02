import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { InscriptionApi } from '../API/kanbanApi'

function Inscription (props){

    let navigate = useNavigate()

    const [form, setForm] = useState({nom: '', prenom: '', email: '', mdp: '', mdpc: ''})

    // const[nom, setNom] = useState('')
    // const[prenom, setPrenom] = useState('')
    // const[email, setEmail] = useState('')
    // const[mdp, setMdp] = useState('')
    // const[mdpc, setMdpc] = useState('')

    function submitForm(event) {

        event.preventDefault()
        // console.log(nom);

        if ( form.mdp == form.mdpc) {

            InscriptionApi(form)        
            .then(function (data) {
    
            console.log(data);
                navigate('/')
    
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });

        }

        else {

            alert('Les Mot de Passe sont différents !')

        }

        
    }
    return (
        
            
            <form className='form'onSubmit={submitForm}>
                    
                <div className="flexB">
                    <label htmlFor='nom'>Nom : </label>
                    <input type='text' id='nom' value = {form.nom} onChange = { (event) => {

                    setForm({...form,nom:event.target.value})

                    // console.log(event.target.value);

                    }}/>

                </div>
                
                <div className="flexB">
                    <label htmlFor='prenom'>Prenom : </label>
                    <input type='text' id='prenom' value = {form.prenom} onChange = { (event) => {

                    setForm({...form,prenom:event.target.value})

                    }}/>

                </div>

                <div className="flexB">
                    <label htmlFor='email'>Email : </label>
                    <input type='text' id='email' value = {form.email} onChange = { (event) => {

                    setForm({...form,email:event.target.value})

                    }}/>

                    </div>

                <div className="flexB">
                    <label htmlFor='mdp'>Mot de Passe : </label>
                    <input type='text' id='mdp' value = {form.mdp} onChange = { (event) => {

                        setForm({...form,mdp:event.target.value})

                    }}/>

                    </div>

                    <div className="flexB">
                    <label for='mdpc'>Comfirmer le Mot de Passe : </label>
                    <input type='password' id='mdpc' value = {form.mdpc} onChange = { (event) => {

                        setForm({...form,mdpc:event.target.value})

                    }}/>

                    </div>

                <button type='submit'>Accepter</button>
            
    
            </form>

    )
}

export default Inscription;