import {useState, useContext} from 'react'
import {RecupModiApi} from '../API/kanbanApi';
import {UserContexte} from '../Contexte/usercontexte'

function PostItEdit(props) {

    const[titre, setTitre] = useState(props.obj.title)
    const[text, setText]= useState(props.obj.content)
    const {userId, setuserId}= useContext(UserContexte)

    return (

        <div className='postit flex'>


            <input type='text' value={titre} onChange={(event)=>{setTitre(event.target.value)}} />
            <textarea value={text} onChange={(event) =>{setText(event.target.value)}} />
       
            <button type="submit" onClick={()=>{
           
           let copie=[...props.tableau]
           let numIndex= copie.findIndex((elem)=>elem._id==props.obj._id)

           copie[numIndex].title=titre
           copie[numIndex].content=text
           copie[numIndex].edit = false 
           
           props.settableau([...copie])

           RecupModiApi(copie, numIndex, props.obj._id, userId)
            .then(function (data) {
            console.log(data);
            }).catch(function (error) {
            console.warn('Something went wrong.', error);
            }); 

            
               }}>Valider</button> 

        </div>

    )

}


export default PostItEdit