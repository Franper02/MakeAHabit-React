import React from "react";
import "../styles/habit.css"

export default function Habit(props){
    return(
        <div className="habit-container">
            <input type="checkbox" className="habit-checkbox" onClick={props.toggleCompleted}/>
            <div className="check" onAnimationEnd={props.endAnim}></div>
            <h1 className="habit-title">{props.title}</h1>
        </div>
    )
}