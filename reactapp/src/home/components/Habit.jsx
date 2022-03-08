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

    
    function endAnim(event) {
        setIsHabitChecked(prevIsHabitChecked => !prevIsHabitChecked)
        let check = event.target
        check.style.display="none"
        check.parentElement.style=`background-color : ${isHabitChecked ? 'var(--green)':'white'}`
        check.className= isHabitChecked ? "uncheck" : "check"
    }


    return(
        <div className="habit-container" style={{backgroundColor : isHabitChecked ? "var(--green)" : "white"}}>
            <input type="checkbox" className="habit-checkbox" onChange={toggleCompleted} checked={isChecked}/>
            <div className={isHabitChecked ? "uncheck" : "check"} onAnimationEnd={endAnim}></div>
            <h1 className="habit-title">{props.title}</h1>
        </div>
    )
}