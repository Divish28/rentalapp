import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import InvalidUrl from './component/InvalidUrl';
import Signup from './component/Signup';
import Home from './component/Home';
import Heading from './component/Heading';

function App() {
  return (
    <div>
      <Navbar/>
      <Heading/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='*' element={<InvalidUrl/>}/>
      </Routes>
      
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
