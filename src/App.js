import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import InvalidUrl from './component/InvalidUrl';
import Signup from './component/Signup';
import Home from './component/Home';
import Heading from './component/Heading';
import Chennai from './component/Chennai';
import Mumbai from './component/Mumbai'
import Bengaluru from './component/Bengaluru'
import Delhi from './component/Delhi'
import Kochi from './component/Kochi'
import HouseList from './component/HouseList';
import { AuthProvider } from './component/auth';


const App=()=> {


  return (
    
    <div>
      <Navbar/>
      <Heading/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='/Chennai' element={<Chennai/>}/>
        <Route path='/Mumbai' element={<Mumbai/>}/>
        <Route path='/Bengaluru' element={<Bengaluru/>}/>
        <Route path='/Delhi' element={<Delhi/>}/>
        <Route path='/Kochi' element={<Kochi/>}/>
        <Route path='/HouseList' element={<HouseList/>}/>
        <Route path='*' element={<InvalidUrl/>}/>
      </Routes>
      

    </div>
  );
}

export default App;