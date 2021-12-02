import {useState} from 'react'

function PostItEdit(props) {

    const[titre, setTitre] = useState(props.obj.title)
    const[text, setText]= useState(props.obj.content)

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
               }}>Valider</button> 

        </div>

    )

}


export default PostItEdit