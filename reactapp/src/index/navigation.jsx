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
            <a className="nav-link">Contact us</a>
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