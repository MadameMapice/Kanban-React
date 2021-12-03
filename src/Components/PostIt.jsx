import React, {useState, useEffect, useContext} from 'react';
import { supprimer } from '../API/kanbanApi';
import { moveleft } from '../API/kanbanApi';
import { moveright } from '../API/kanbanApi';
import { UserContexte } from '../Contexte/usercontexte';


function PostIt(props) {

    const {userId, setuserId}= useContext(UserContexte);

    return (

        <div className='postit'>

            <div className='x'>
            <i className="fas fa-times" onClick={()=>{
            
                let copie=[...props.tableau]
                let numIndex= copie.findIndex((elem)=>elem._id==props.obj._id)
                copie.splice(numIndex,1)
                props.settableau([...copie])

                supprimer(copie, numIndex, props.obj._id, userId)
                .then(function (data) {
                    console.log(data);
                }).catch(function (error) {
                    console.warn('Something went wrong.', error);
                });

            }}></i>
            
            </div>

            <p>{props.obj.title}</p>
            <p>{props.obj.content}</p>
            {/* <p>{props.obj.id}</p> 
            Pour regarder le ID de Post it
            */} 


            <div className='flech'>

            <p onClick={()=>{
            
            let copie=[...props.tableau]
            let numIndex= copie.findIndex((elem)=>elem._id==props.obj._id)

            if(copie [numIndex].state>0){
            copie[numIndex].state--
            props.settableau([...copie])

            moveleft(copie, numIndex, userId)
            .then(function (data) {
            console.log(data);
            }).catch(function (error) {
            console.warn('Something went wrong.', error);
            });
            
            }

            }}>&lang;
            </p>


                <i className="fas fa-keyboard" onClick={()=>{
           
            let copie=[...props.tableau]
            let numIndex= copie.findIndex((elem)=>elem._id==props.obj._id)

            copie[numIndex].edit = true 
            
            props.settableau([...copie])
                }}></i>


            <p onClick={()=>{
            
            let copie=[...props.tableau]
            let numIndex= copie.findIndex((elem)=>elem._id==props.obj._id)
            if(copie[numIndex].state<2){
            copie[numIndex].state++
            props.settableau([...copie])

            moveright(copie, numIndex, userId)
            .then(function (data) {
            console.log(data);
            }).catch(function (error) {
            console.warn('Something went wrong.', error);
            }); 

            }

            }}>&rang;
            </p>

            </div>

            

        </div>

    )

}


export default PostIt