import React from "react";
import '../styles/habit.css'

export default function NewHabit(props){
    return(
        <>
        {props.visible &&
            <div className="new-habit-container">
                <h2 className="new-habit-title">Create a new habit</h2>
                <form>
                    <input placeholder="Habit..." />
                </form>
            </div>
        }
        </>
    )
}