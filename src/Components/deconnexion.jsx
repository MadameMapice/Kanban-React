import React from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {useState, useContext} from 'react'
import {UserContexte} from '../Contexte/usercontexte'

function Deconnexion(props){
    const {userId, setuserId}= useContext(UserContexte)

    let navigate =useNavigate()
    useEffect(() => {
        setuserId("")
        navigate('/')

    }, []);
    return (
      
        <div></div>

    )
}

export default Deconnexion;