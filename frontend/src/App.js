import {Route,Routes} from 'react-router-dom';
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import Landing from './Components/Pages/Landing'
import Home from './Components/Pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
