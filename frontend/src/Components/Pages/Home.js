import BackgroundImage from '../../images/bg.jpg'
import React, { useState, useEffect } from "react";
import AuthService from '../../services/auth.service';
import EventBus from '../../common/EventBus';
import { Link, Navigate } from 'react-router-dom';
import "./Home.css"
const Home = () => {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          setCurrentUser(user);
          setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    
        EventBus.on("logout", () => {
          logOut();
        });
    
        return () => {
          EventBus.remove("logout");
        };
      }, []);
    
      const logOut = () => {
        AuthService.logout();
        setShowAdminBoard(false);
        setCurrentUser(undefined);
        
      };
    return (
        <header style={HeaderStyle}>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            
            <Link to="/">
            <button id="log_btns"onClick={logOut}>
              ATSIJUNGTI
            </button>
            </Link>  
          </div>
        ) : (
            <p>Neprisijunges Vartotojas</p>
        )}
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
export default Home;