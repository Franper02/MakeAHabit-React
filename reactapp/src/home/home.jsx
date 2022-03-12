import React from "react";
import Navbar from "./components/Navbar";
import HabitsPage from "./components/HabitsPage";
import NewHabit from "./components/NewHabit";
import Calendar from "../calendar/Calendar";
import './styles/home.css'

export default function Home(){

    const[isNewHabitOn, setNewHabitOn] = React.useState(false)

    const[formData, setFormData] = React.useState({
        habit : "",
        isChecked : false,
    })

    const[navigation, changeNavigation] = React.useState(true)


    function toggleNavigation(){
        changeNavigation(prevChangeNavigation => !prevChangeNavigation)
    }

    function toggleNewHabit(){
        setNewHabitOn(prevIsNewHabitOn => !prevIsNewHabitOn)
    }

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch("home" ,{
            method:'POST',
            body: JSON.stringify({
                habit: formData.habit
            })
        })
        toggleNewHabit()
    }

    return(
        <div className="page-container">
            <div className="homepage-navbar">
                <Navbar toggleNewHabit={toggleNewHabit} toggleNavigation={toggleNavigation}/>
            </div>
            <NewHabit 
                    visible={isNewHabitOn} 
                    toggleNewHabit={toggleNewHabit} 
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
            <div className="main-content-wrapper" style={{display:`${isNewHabitOn ? "none" : "block"}`}}>
                <div className="homepage-habits">
                    {navigation ? <HabitsPage isNewHabit={isNewHabitOn}/> : <Calendar />}
                </div>
            </div>
        </div>


    )
}