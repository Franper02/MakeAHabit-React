import React from "react";
import '../styles/home.css'

export default function Navbar(){
    return(
        <div className="nav-container">
            <button className="nav-button">+</button>
            <button className="nav-button">Home</button>
            <button className="nav-button">Calendar</button>
            <button className="nav-button">Log-out</button>
        </div>
    )
}