import React, {useState, useEffect} from 'react';
import Column from '../Components/column';
import {RecupTachesApi} from '../API/kanbanApi';



function Kanban(props){



  const [tableau, settableau] = useState([]); 

  useEffect(() => {

    RecupTachesApi()
    .then(function (data) {

    console.log(data);
    settableau([...data.tasks])

}).catch(function (error) {
    console.warn('Something went wrong.', error);
});
    
},[])


    return (

      <div  className='kanban flex justify-sa'>
        <Column titre="To Do" tableau={tableau} statut='0' settableau={settableau}/>
        <Column titre="In progress" tableau={tableau} statut='1' settableau={settableau}/>
        <Column titre="Done" tableau={tableau} statut='2' settableau={settableau}/>
      </div>
   
    )
}

export default Kanban;

  

