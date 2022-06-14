import './Restaurant.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React,{useEffect,useState} from "react";
import authHeader from '../services/auth-header';

const Restaurant = () => {
const [restaurant,setRestaurant] = useState([]);
const loadRestaurant = () => {
    axios.get("http://localhost:8080/api/restaurants",{headers:authHeader()}).then((res) => {
        setRestaurant(res.data.reverse());
    });
};
useEffect(() => {
    loadRestaurant();
}, [restaurant]);
    return (  
        <div>
            <div className='ss'>
            {restaurant.map((restaurants, index) => (
                <div className="restaurantpage">
                    <h2>Restoranas : {restaurants.name}</h2>
              <ul key={index}>
                <li>
                 Įmonės Kodas : {restaurants.code}
                </li>
                <li>
                 Adresas : {restaurants.address}
                </li>
               
              </ul>
              <div className='buttons'>
              <Link to='/menu'>
              <button id="btns">Peržiurėti Menu</button>
              </Link>
              <Link to='/edit-restaurant'>
              <button id="btns">Redaguoti Restorana</button>
              </Link>
              </div>
              </div>
            ))}
            </div>
        </div>
    );
}
 
export default Restaurant;