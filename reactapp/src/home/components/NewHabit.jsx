import React from "react";
import '../styles/habit.css'

export default function NewHabit(props){
    return(
        <>
        {props.visible &&
            <div className="new-habit-container">
                <div className="new-habit-wrapper">
                    <h2 className="new-habit-title">Create a new habit</h2>
                    <form className="new-habit-form" onSubmit={props.handleSubmit}>
                        <input 
                            name="habit" 
                            placeholder="Habit..."
                            onChange={props.handleChange}
                            value={props.formData.habit} 
                            required/>
                        <div className="form-buttons">
                            <input name="Submit" type="submit"/>
                            <button onClick={props.toggleNewHabit}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        }
        </>
    )
}