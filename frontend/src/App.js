import {Route,Routes,Navigate} from 'react-router-dom';
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import Landing from './Components/Pages/Landing'
import Home from './Components/Pages/Home';
import './App.css';

function App() {
  const AuthRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.accessToken) {
      return <Navigate to="/signin" replace />;
    }
    return children;
  };
  const AuthAdminRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.roles !== "admin"){
      return <Navigate to ="/" replace/>
    }
    return children;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/home" element={<AuthRoute><Home/></AuthRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
