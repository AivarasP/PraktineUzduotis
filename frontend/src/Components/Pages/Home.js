import BackgroundImage from '../../images/bg.jpg'
import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <header style={HeaderStyle}>
        <div></div>
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