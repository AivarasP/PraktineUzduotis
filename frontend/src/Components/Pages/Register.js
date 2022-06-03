import { Link } from 'react-router-dom';
import BackgroundImage from '../../images/bg.jpg'
import React from 'react';
import './Register.css'
const Register = () => {
    return ( 
        <header style={HeaderStyle}>
        <h1>Registracija</h1>
        <div className='layout'>
        <div>
        <label htmlFor="username" style={{color:'white',}}>Vartotojo Vardas</label>
        <input type="text"
               placeholder='Vardas'
               name="username"
               className="inputs">
        </input>
        </div>
        <div>
        <label htmlFor="username" style={{color:'white',}}>Elektroninis paštas</label>
        <input type="text"
               placeholder='VardenisPavardenis@gmail.com'
               name="username"
               className="inputs">
        </input>
        </div>
        <div>
        <label htmlFor="username" style={{color:'white',}}>Slaptažodis</label>
        <input type="password"
               placeholder='***********'
               name="username"
               className="inputs">
        </input>
        </div>
        <div style={{color:'white'}}>Jau turite vartotoja? <Link to="/signin" style={{color:'rgb(69, 220, 180)',textDecoration:'none'}}> Prisijungti.</Link></div>
        <Link to="/signin">
                <button id="log_btn">Registruotis</button>
                </Link>
        </div>
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
export default Register;