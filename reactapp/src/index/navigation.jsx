import React from "react";
import './navigation.css';

export default function NavBar(props){
    return(
      <div className="App">
    <nav className="bar">
        <div className="brand-wrap">
          <a className='nav-brand'>Make a habit.</a>
        </div>
      <div className='nav-links-container'>
        <ul className="nav-links-list">
          <li>
            <h4 className="contact">Contact us</h4>
          </li>
          <li>
            <button className="nav-link" onClick={() => props.toggleLogin()}>Sign in</button>
          </li>
          <li>
            <button className="nav-link" onClick={() => props.toggleRegister()}>Sing up</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}