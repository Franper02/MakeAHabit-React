import React from "react";
import '../styles/habit.css'

export default function NewHabit(props){
    return(
        <>
        {props.visible &&
            <div className="new-habit-container">
                <h2 className="new-habit-title">Create a new habit</h2>
                <form onSubmit={props.handleSubmit}>
                    <input 
                        name="habit" 
                        placeholder="Habit..."
                        onChange={props.handleChange}
                        value={props.formData.habit} 
                        required/>
                    <div>
                        <input name="Submit" type="submit"/>
                        <button onClick={props.toggleNewHabit}>Cancel</button>
                    </div>
                </form>
            </div>
        }
        </>
    )
}