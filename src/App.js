import NavBar from './Components/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action, horrormovies, trending, commedy, documentaries } from './urls'
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';




function App() {
  return (
    <div >
     

      <NavBar/> 
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<Account/>}/>
    </Routes>

     <Banner/>
     <RowPost  url={originals} title="Netflix Originals"/>
     <RowPost url={trending}  title="Trending Now" isSmall />
     <RowPost url={action}  title="Action Movies" isSmall />
     <RowPost url={horrormovies}  title="Horror Movies" isSmall />
     <RowPost url={commedy}  title="Comedy Movies" isSmall />
     <RowPost url={documentaries}  title="Documentaries" isSmall />
   
     
    </div>
  );
}

export default App;
