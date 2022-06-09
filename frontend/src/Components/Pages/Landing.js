import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'
import BackgroundImage from '../../images/bg.jpg'
const Landing = () => {

    return (  
        <header style={HeaderStyle}>
            <h1 className="title">Valgykla</h1>
        <div className="layout cssanimation sequence fadeInBottom">
            <h2>Prisijunkite ir Skanaus!</h2>
            <div className="buttons">
                <Link to="/signin">
                <button id="buttons">Prisijungti</button>
                </Link>
                <Link to="signup">
                <button id="buttons">Registracija</button>
                </Link>
            </div>
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
export default Landing;