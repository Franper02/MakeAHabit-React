import React from "react";
import Navbar from "./components/Navbar";
import HabitsPage from "./components/HabitsPage";
import NewHabit from "./components/NewHabit";
import './styles/home.css'

export default function Home(){

    const[isNewHabitOn, setNewHabitOn] = React.useState(false)

    const[formData, setFormData] = React.useState({
        habit : "",
        isChecked : false,
    })

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
        <>
            <div className="homepage-navbar">
                <Navbar toggleNewHabit={toggleNewHabit}/>
            </div>
            <NewHabit 
                visible={isNewHabitOn} 
                toggleNewHabit={toggleNewHabit} 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
            <div className="homepage-habits">
                <HabitsPage isNewHabit={isNewHabitOn}/>
            </div>
        </>

    )
}