import React from "react";
import './calendar.css'

export default function Calendar(){

    const months =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    let date = new Date()

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let days = []

    for(let i = 1; i <= parseInt(lastDay) ; i++){
        days.push(i)
    }

    const alldays = days.map((day)=> <div key={day} className={day} >{day}</div>)
    
    return(
        <div className="calendar-container">
            <h1>Calendar</h1>
            <div className="calendar">
                <div className="month">
                    <h2>{months[date.getMonth()]}</h2>
                    <p>{date.getDate()}</p>
                    <p>{date.getFullYear()}</p>
                </div>
                <div className="days">
                    {alldays}
                </div>
            </div>
        </div>
    )
}