import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Kanban from './Pages/kanban';
import Footer from './Components/footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Pages/login';
import Compte from './Pages/compte';
import Inscription from './Pages/inscription';



function App() {
  return (
    <div className='App'>

     <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/kanban" element={<Kanban/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/inscription" element={<Inscription/>}/>
      <Route path="/mon-compte" element={<Compte/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>

    


    </div>
  );
}

export default App;
