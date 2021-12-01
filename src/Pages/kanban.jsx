import React from 'react';
import Column from '../Components/column';

function Kanban(props){
    return (


      <div  className='kanban flex justify-sa'>
        <Column titre="To Do"/>
        <Column titre="In progress"/>
        <Column titre="Done"/>
      </div>
   
    )
}

export default Kanban;