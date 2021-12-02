function PostIt(props) {

    return (

        <div className='postit'>

            <div className='x'>
            <i className="fas fa-times" onClick={()=>{
            
                let copie=[...props.tableau]
                let numIndex= copie.findIndex((elem)=>elem.id==props.obj.id)
                copie.splice(numIndex,1)
                props.settableau([...copie])

            }}></i>
            
            </div>

            <p>{props.obj.titre}</p>
            <p>{props.obj.content}</p>
            {/* <p>{props.obj.id}</p> 
            Pour regarder le ID de Post it
            */} 


            <div className='flech'>

            <p onClick={()=>{
            
            let copie=[...props.tableau]
            let numIndex= copie.findIndex((elem)=>elem.id==props.obj.id)

            if(copie [numIndex].statut>0){
            copie[numIndex].statut--
            props.settableau([...copie])
            
            }

            }}>&lang;
            </p>


                <i className="fas fa-keyboard" onClick={()=>{
           
            let copie=[...props.tableau]
            let numIndex= copie.findIndex((elem)=>elem.id==props.obj.id)

            copie[numIndex].edit = true 
            
            props.settableau([...copie])
                }}></i>


            <p onClick={()=>{
            
            let copie=[...props.tableau]
            let numIndex= copie.findIndex((elem)=>elem.id==props.obj.id)
            if(copie[numIndex].statut<2){
            copie[numIndex].statut++
            props.settableau([...copie])
            }

            }}>&rang;
            </p>

            </div>

            

        </div>

    )

}


export default PostIt