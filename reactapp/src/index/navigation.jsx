import React from "react";
import './navigation.css';

export function NavBar(){
    return(
        <div className="App">
      <nav className="bar">
          <div className="brand-wrap">
            <a className='nav-brand'>Make a habit.</a>
          </div>
        <div className='nav-links-container'>
          <ul className="nav-links-list">
            <li>
              <a className="nav-link">Contact us</a>
            </li>
            <li>
              <a className="nav-link">Sign in</a>
            </li>
            <li>
              <a className="nav-link">Sing up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
}