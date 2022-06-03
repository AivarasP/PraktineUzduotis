import BackgroundImage from '../../images/bg.jpg'
import React, { useState, useRef } from "react";
import {useNavigate,Link} from 'react-router-dom'
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from '../../services/auth.service';
import './Login.css'
const Login = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      setMessage("");
      setLoading(true);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        AuthService.login(username, password).then(
          () => {
            console.log("LoginPage: " + username)
             navigate("/home");
            // window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setLoading(false);
            setMessage(resMessage);
          }
        );
      } else {
        setLoading(false);
      }
    };


    return ( 
        <header style={HeaderStyle}>
        <h1>Prisijungti</h1>
        <Form onSubmit={handleLogin} ref={form}>
        <div className='layout'> 
        <div>
        <label htmlFor="username" style={{color:'white',}}>Vartotojo Vardas</label>
        <input type="text"
               placeholder='Vardas'
               name="username"
               className="inputs"
               value={username}
               onChange={onChangeUsername}
               validations={[required]}
               >
        </input>
        </div>
        <div>
        <label htmlFor="username" style={{color:'white',}}>Slaptažodis</label>
        <input type="password"
               placeholder='***********'
               name="username"
               value={password}
               onChange={onChangePassword}
               validations={[required]}
               className="inputs">
        </input>
        </div>
        
        <div style={{color:'white'}}>Dar neturite vartojo? <Link to="/signup" style={{color:'rgb(69, 220, 180)',textDecoration:'none'}}> Prisiregistruoti.</Link></div>
        <Link to="/home">
        <button id="log_btn" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm" ></span>
              )}
              Prisijungti
            </button>
                </Link>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </div>
        </Form>
        </header>
     );
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
export default Login;