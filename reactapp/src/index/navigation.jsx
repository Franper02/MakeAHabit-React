import React from "react";
import { render } from "react-dom";
import './navigation.css';

export class NavBar extends React.Component{
  render(){
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
            <button className="nav-link" onClick={() => this.props.toggleForm(!this.props.visible)}>Sign in</button>
          </li>
          <li>
            <button className="nav-link" onClick={() => this.props.toggleForm(!this.props.visible)}>Sing up</button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
  }

}