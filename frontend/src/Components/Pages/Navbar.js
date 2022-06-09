
import React, { useState, useEffect } from "react";
import AuthService from '../../services/auth.service';
import EventBus from '../../common/EventBus';
import { Link } from 'react-router-dom';
const Navbar = () => {
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
        <header>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            
            <Link to="/">
            <button id="log_btns"onClick={logOut}>
              ATSIJUNGTI
            </button>
            </Link>
            <Link to="/add-restaurant/">
              <button id="log_btns">
                PRIDĖTI RESTORANĄ
              </button>
            </Link>  
          </div>
        ) : (
            <p>Neprisijunges Vartotojas</p>
        )}
        </header>
      );
}
 
export default Navbar;