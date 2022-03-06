import React from "react";
import Habit from "./Habit";
import '../styles/home.css'


export default function HabitsPage(props){

    const [isHabitChecked, setIsHabitChecked] = React.useState(false)

    const [HabitData, setHabitData] = React.useState([
        {
            model: "habitsapp.habit",
            pk: 20,
            fields: {
                user: 1,
                habit: "Despertarse a las 7am",
                creation_time: "2022-03-05",
                status: false
            }
        }
    ])

    function toggleCompleted(event){
        let check = event.target.nextElementSibling;
        check.style.display="block";
        check.style.animationPlayState="running";
    }

    function endAnim(event) {
        setIsHabitChecked(prevIsHabitChecked => !prevIsHabitChecked)
        let check = event.target
        check.style.display="none"
        check.parentElement.style=`background-color : ${isHabitChecked ? 'white' : 'var(--green)'}`
        check.className= isHabitChecked ? "check" : "uncheck"
    }

    React.useEffect(() => {
        fetch("queryHabits")
        .then(response => response.json())
        .then(data => setHabitData(data))
    }, [props.isNewHabit])

    console.log(HabitData)

    const allHabits = HabitData.map(hab => {
        return <Habit title={hab.fields.habit} toggleCompleted={toggleCompleted} endAnim={endAnim} />
    })

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return(
        <div className="home-front">
            <h1>Habits</h1>
            <h4>Today: {today} </h4>
            <div className="habit-wrapper">
                {allHabits}
            </div>
        </div>
    )
}