import React from "react";
import Navbar from "./components/Navbar";
import HabitsPage from "./components/HabitsPage";
import './styles/home.css'

export default function Home(){
    return(
        <>
            <div className="homepage-navbar">
                <Navbar />
            </div>
            <div className="homepage-habits">
                <HabitsPage />
            </div>
        </>

    )
}