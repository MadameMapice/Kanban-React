import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Kanban from './Pages/kanban';
import Footer from './Components/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/login';
import Compte from './Pages/compte';
import Inscription from './Pages/inscription';
import {UserContexte} from './Contexte/usercontexte';
import  {useState, useEffect} from 'react';
import Redirect from './Components/Redirect';
import Deconnexion from './Components/deconnexion';



function App() {

  const [userId, setuserId]= useState('');

  useEffect(() => {
    console.log(userId);
    
  }, [userId]);
 
  return (

    <div className='App'>

      <UserContexte.Provider value={{userId,setuserId}}>

     <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/kanban" element={(userId=="")? <Redirect to="/" />:<Kanban/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/inscription" element={<Inscription/>}/>
          <Route path="/mon-compte" element={(userId=="")? <Redirect to="/" />:<Compte/>}/>
          <Route path="/deconnexion" element={<Deconnexion/>}/>
        </Routes>

      <Footer/>
      </BrowserRouter>

    </UserContexte.Provider>


    </div>
  );
}

export default App;
