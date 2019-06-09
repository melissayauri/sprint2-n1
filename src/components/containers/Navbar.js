import React from 'react';
import  '../styles/navbar.scss';
import logo from '../../assets/img/logo.png';
import iconSound from '../../assets/img/icon-sound.png'
class Navbar extends React.Component{

render(){
    return(
        <nav className="navbar">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <div>
            <img src={logo} alt="logo" className="responsive-img logo" ></img>
                    <p>OH! MEGA</p>
            </div>
         
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <img src={iconSound} alt="icon-sound" className="responsive-img " ></img></li>
        
          
          </ul>
        </div>
      </nav>
    )
}



}

export default Navbar;