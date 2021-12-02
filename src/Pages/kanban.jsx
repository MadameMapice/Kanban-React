import React, {useState} from 'react';
import Column from '../Components/column';


function Kanban(props){



  const [tableau, settableau] = useState([]);
    return (


      <div  className='kanban flex justify-sa'>
        <Column titre="To Do" tableau={tableau} statut='0' settableau={settableau}/>
        <Column titre="In progress" tableau={tableau} statut='1' settableau={settableau}/>
        <Column titre="Done" tableau={tableau} statut='2' settableau={settableau}/>
      </div>
   
    )
}

export default Kanban;