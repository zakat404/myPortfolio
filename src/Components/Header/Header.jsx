import React from 'react';
import './Header.modules.css';

export const Header = () => {
  const redirectToGoogle = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <section id="header">
      <a className='logo'>Munteanu Marius</a>
      <div>
        <ul id="navbar">
          <li>
            <button onClick={redirectToGoogle} className="btn" type="button">
              <strong>About</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </li>
          <li>
            <form action="https://www.google.com">
              <button className="button type1">
                <span className="btn-txt">Contact</span>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
}
