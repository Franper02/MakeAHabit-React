import React from "react";
import Habit from "./Habit";
import '../styles/home.css'


export default function HabitsPage(props){

    const [HabitData, setHabitData] = React.useState([
        {
            model: "habitsapp.habit",
            pk: 20,
            fields: {
                user: 1,
                habit: "Despertarse a las 7am",
                creation_time: "2022-03-05",
                status: true
            }
        }
    ])

    React.useEffect(() => {
        fetch("queryHabits")
        .then(response => response.json())
        .then(data => setHabitData(data))
    }, [props.isNewHabit])

    console.log(HabitData)

    const allHabits = HabitData.map(hab => {
        return <Habit
                    key={hab.pk} 
                    title={hab.fields.habit} 
                    id={hab.pk}
                    isChecked={hab.fields.status}
                    />
    })

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

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