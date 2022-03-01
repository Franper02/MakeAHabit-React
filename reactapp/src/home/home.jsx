import React from "react";
import Navbar from "./components/Navbar";
import HabitsPage from "./components/HabitsPage";


export default function Home(){
    return(
        <div>
            <Navbar />
            <HabitsPage />
        </div>
    )
}