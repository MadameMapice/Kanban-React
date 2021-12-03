import React from 'react';
import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'
import {LoginApi} from '../API/kanbanApi'
import {useNavigate} from 'react-router-dom'
import {UserContexte} from '../Contexte/usercontexte'

function Login(props){

    let navigate = useNavigate()
    const {userId, setuserId}= useContext(UserContexte)

    const [form, setForm] = useState({login: '', pass:''})
    // const[login, setLogin] = useState('')
    // const[pass, setPass]= useState('')

    function submitForm(event) {
        event.preventDefault()
        //  console.log(login);

        LoginApi(form, userId)
        .then(function (data) {

        console.log(data);

        if (data.mess !== undefined) {

            alert(data.mess)
            
        }
        else {
            setuserId(data._id)
            navigate('/kanban')        

        }

    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
        
    }

    return (
        
        <form className='log' onSubmit={submitForm}>
            <div className="flexB">
            <label htmlFor='nom'>Nom : </label>
            <input type='text' id='nom' value = {form.login} onChange = { (event) => {setForm({...form,login:event.target.value}) }} /></div>
            
            <div className="flexB">
            <label htmlFor='mdp'>Mot de Passe </label>
            <input type='password' id='mdp' value = {form.pass} onChange = { (event) => {setForm({...form,pass:event.target.value}) }}/>
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