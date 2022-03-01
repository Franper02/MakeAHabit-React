import React from "react";
import Habit from "./Habit";


export default function HabitsPage(){
    const [HabitData, setHabitData] = React.useState([])

    React.useEffect(() => {
        fetch("queryHabits")
        .then(response => response.json())
        .then(data => setHabitData(data))
    }, [])

    console.log(HabitData)

    const allHabits = HabitData.map(hab => {
        return <Habit title={hab.fields.habit} />
    })

    return(
        <div>
            {allHabits}
        </div>
    )
}