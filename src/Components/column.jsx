import React from 'react';
import PostIt from './PostIt';

function Column(props){
    return (


        <div className='width20'>

            <h2>{props.titre}</h2>
            
            {/* {props.tableau.map((elem,key)=><div>{elem.titre}</div>)} */}

            {props.tableau.map((elem, key) => <PostIt obj = {elem} />)}
        </div>

  
   
    )
}

export default Column;