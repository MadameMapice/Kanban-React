import React, {useState} from 'react';
import Column from '../Components/column';


function Kanban(props){

  const [tableau, settableau] = useState([{titre:"test",content:"salut",statut:0},{titre:"test2",content:"salut",statut:1},{titre:"test3",content:"salut",statut:0}]);
    return (


      <div  className='kanban flex justify-sa'>
        <Column titre="To Do" tableau={tableau}/>
        <Column titre="In progress" tableau={tableau}/>
        <Column titre="Done" tableau={tableau}/>
      </div>
   
    )
}

export default Kanban;