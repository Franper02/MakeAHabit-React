import React from "react";
import "../styles/habit.css"

export default function Habit(props){

    const [isHabitChecked, setIsHabitChecked] = React.useState(props.isChecked)
    const [isChecked, setIsChecked] = React.useState(isHabitChecked)


    function toggleCompleted(event){
        let check = event.target.nextElementSibling;
        check.style.display="block";
        check.style.animationPlayState="running";
        fetch(`completed/${props.id}`,{
            method:"PUT",
            body:JSON.stringify({
                habitId: props.id,
                comp : !props.isChecked
            })
        })
        setIsChecked(prevIsChecked => !prevIsChecked)
    }

    function deleteHabit(event){
        let container = event.target.parentElement.style
        console.log(container)
        container.animationPlayState="running"
        fetch(`delete/${props.id}`, {
            method:"POST",
            body: JSON.stringify({
                habitpk: props.id
            })
        })
    }

    function disappear(event){
        let eventTarget = event.target
        eventTarget.style.display="none"
    }
    
    function endAnim(event) {
        setIsHabitChecked(prevIsHabitChecked => !prevIsHabitChecked)
        let check = event.target
        check.style.display="none"
        check.parentElement.parentElement.style=`background-color : ${isHabitChecked ? 'var(--green)':'white'}`
        check.className= isHabitChecked ? "uncheck" : "check"
    }


    return(
        <div className="habit-container" style={{backgroundColor : isHabitChecked ? "var(--green)" : "white"}} onAnimationEnd={disappear}>
            <div className="input-container">
                <input type="checkbox" className="habit-checkbox" onChange={toggleCompleted} checked={isChecked}/>
                <div className={isHabitChecked ? "uncheck" : "check"} onAnimationEnd={endAnim}></div>
                <h1 className="habit-title">{props.title}</h1>
            </div>
            <button className="habit-delete" onClick={deleteHabit}>Delete</button>
        </div>
    )
}