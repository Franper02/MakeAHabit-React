import React, { Fragment } from "react";
import './front.css'
import { LoginForm, RegisterForm } from "../forms/form";

export default function Front(props){
    return(
        <Fragment>
        <RegisterForm registerVisible = {props.registerVisible} closeForm = {props.closeForm} />
        <LoginForm  loginVisible = {props.loginVisible} closeForm = {props.closeForm}/>
        {(!props.loginVisible && !props.registerVisible) &&
            <div className="front-page-wrapper">
                <div className="front-page">
                    <h1 className="title">Make<br/> A <br/>Habit.</h1>
                    <h4 className="subtitle">Build a habit and register your progress daily</h4>
                    <div className="button-container" onClick={props.toggleRegister}>
                        Get Started
                    </div>
                </div>
            </div>}
            <div className="wave">
                    </div>
        </Fragment>

    )
}