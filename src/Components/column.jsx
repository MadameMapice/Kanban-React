import React from 'react';
import PostIt from './PostIt';
import PostItEdit from './PostItEdit';

function Column(props){

    let tableaufiltre= props.tableau.filter((elem)=>elem.statut===parseInt(props.statut))
    console.log(tableaufiltre);
    return (


        <div className='width20'>

            <h2 onClick={()=>{
                let id=0
                if(props.tableau.length>0){
                    id=props.tableau[props.tableau.length-1].id+1
                }
                props.settableau([...props.tableau,{titre:"",content:"",statut:parseInt(props.statut),id:id, edit:false}])
            }}>{props.titre}</h2>
            
            {/* {props.tableau.map((elem,key)=><div>{elem.titre}</div>)} */}

            {tableaufiltre.map((elem, key) => {
            
                 if (elem.edit === true) {
               
                return <PostItEdit obj={elem} tableau={props.tableau} settableau={props.settableau} />
            }

            else {

                 return <PostIt obj = {elem} tableau={props.tableau} settableau={props.settableau} />
                
            }})
            
            }</div>

  
   
    )
}

export default Column;