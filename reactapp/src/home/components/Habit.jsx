import React from "react";
import "../styles/habit.css"

export default function Habit(props){
    return(
        <div className="habit-container">
            <input type="checkbox" />
            <h1>{props.title}</h1>
        </div>
    )
}