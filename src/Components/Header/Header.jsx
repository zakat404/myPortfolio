import React from 'react';
import './Header.modules.css';
import { Link, animateScroll as scroll } from "react-scroll";


export const Header = () => {
 
 
  

  return (
    <section id="header">
      <a className='logo'>Munteanu Marius</a>
      <div>
        <ul id="navbar">
          <li>
            <Link to="444" smooth={true} duration={1000}  className="btn" type="button">
              <strong>About</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
          </li>
          <li>
            <form >
              <Link to="123" smooth={true} duration={1000}>
              <button  className="button type1">
                <span className="btn-txt" >Contact</span>
              </button>
              </Link>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
}
