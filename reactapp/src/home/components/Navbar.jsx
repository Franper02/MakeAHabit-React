import React from "react";
import '../styles/home.css'

export default function Navbar(props){
    return(
        <div className="nav-container">
            <button onClick={props.toggleNewHabit} className="nav-button">+</button>
            <button className="nav-button">Home</button>
            <button className="nav-button">Calendar</button>
            <button onClick={() => window.location.href="/logout"} className="nav-button">Log-out</button>
        </div>
    )
}