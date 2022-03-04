import React from "react";
import Habit from "./Habit";
import '../styles/home.css'


export default function HabitsPage(props){
    const [HabitData, setHabitData] = React.useState([])

    React.useEffect(() => {
        fetch("queryHabits")
        .then(response => response.json())
        .then(data => setHabitData(data))
    }, [props.isNewHabit])

    console.log(HabitData)

    const allHabits = HabitData.map(hab => {
        return <Habit title={hab.fields.habit} />
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