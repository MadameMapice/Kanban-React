import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CompteApi } from '../API/kanbanApi'

function Compte(props){
    let navigate = useNavigate()

    const [form, setForm] = useState({nom: '', prenom: '', email: '', mdp: '', mdpc: ''})
    // const[nom, setNom] = useState('')
    // const[prenom, setPrenom] = useState('')
    // const[email, setEmail] = useState('')
    // const[mdp, setMdp] = useState('')


    function submitForm(event) {
        event.preventDefault()
        // console.log(login);
        
        CompteApi(form)
        .then(function (data) {

        console.log(data);

        if (data.mess !== undefined) {

            alert(data.mess)
            
        }
        else {
            
            navigate('/kanban')        

        }

    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
        
    }

    return (
        
        <form className='compte' onSubmit={submitForm}>
             
                    <div className='profil'>
                    <i class="fas fa-laugh-beam"></i>
                    </div>

                    <div>
                        <input type='text' placeholder='Nom' value = {form.nom} onChange = { (event) => {

                        setForm({...form,nom:event.target.value})

                        }}/>
                    </div>
                    
                    <div>
                        <input type='text' placeholder='Prenom' value = {form.prenom} onChange = { (event) => {

                        setForm({...form,prenom:event.target.value})

                        }}/>
                    </div>
    
                    <div>
                        <input type='text' placeholder='Email' value = {form.email} onChange = { (event) => {

                        setForm({...form,email:event.target.value})

                        }}/>
                    </div>
    
                    <div>
                        <input type='password' placeholder='Mot de passe' value = {form.mdp} onChange = { (event) => {

                        setForm({...form,mdp:event.target.value})

                        }}/>
                    </div>
    
                    <button type='submit'>Modifier</button>
        </form>

    )
                    }

export default Compte;