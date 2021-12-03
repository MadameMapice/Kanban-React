import React from 'react';
import {useState, useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CompteApi } from '../API/kanbanApi'
import { RecupTachesApi } from '../API/kanbanApi'
import { UserContexte } from '../Contexte/usercontexte'

function Compte(props){
    let navigate = useNavigate()

    const [form, setForm] = useState({nom_modif: '', mail_modif: '', mdp_modif: ''})

    const {userId, setuserId}= useContext(UserContexte)

    // const[nom, setNom] = useState('')
    // const[prenom, setPrenom] = useState('')
    // const[email, setEmail] = useState('')
    // const[mdp, setMdp] = useState('')

    useEffect(() => {
        
        RecupTachesApi()
        .then(function (data) {

            console.log(data);

            setForm( {...form, nom_modif: data.name, mail_modif: data.mail, mdp_modif: data.mdp} )
            
        }).catch(function (error) {
            console.warn('Something went wrong.', error);
        });

        }, []);


    function submitForm(event) {
        event.preventDefault()
        // console.log(login);
        
        CompteApi(form, userId)
        .then(function (data) {

        console.log(data);

        if (data.mess !== undefined) {

            alert(data.mess)
            
        }
        else {
            
            navigate('/')        

        }

    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
        
    }


    return (
        
        <form className='compte' onSubmit={submitForm}>
             
                    <div className='profil'>
                    <i className="fas fa-laugh-beam"></i>
                    </div>

                    <div>
                        <input type='text' placeholder='Nom' value = {form.nom_modif} onChange = { (event) => {

                        setForm({...form,nom_modif:event.target.value})

                        }}/>
                    </div>
                    
                    <div>
                        <input type='text' placeholder='Email' value = {form.mail_modif} onChange = { (event) => {

                        setForm({...form,mail_modif:event.target.value})

                        }}/>
                    </div>
    
                    <div>
                        <input type='password' placeholder='Mot de passe' value = {form.mdp_modif} onChange = { (event) => {

                        setForm({...form,mdp_modif:event.target.value})

                        }}/>
                    </div>
    
                    <button type='submit'>Modifier</button>
        </form>

    )
                    }      

export default Compte;