import React from "react";
import Navbar from "./components/Navbar";
import HabitsPage from "./components/HabitsPage";
import NewHabit from "./components/NewHabit";
import './styles/home.css'

export default function Home(){

    const[isNewHabitOn, setNewHabitOn] = React.useState(false)

    function toggleNewHabit(){
        setNewHabitOn(prevIsNewHabitOn => !prevIsNewHabitOn)
    }

    return(
        <>
            <div className="homepage-navbar">
                <Navbar toggleNewHabit={toggleNewHabit}/>
            </div>
            <NewHabit visible={isNewHabitOn} />
            <div className="homepage-habits">
                <HabitsPage />
            </div>
        </>

    )
}