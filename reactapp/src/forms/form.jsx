import React from "react";
import './form.css'

export function RegisterForm(props){
    return(
        <>
        {props.registerVisible &&
            <div className="form-container">  
                <div className="card-wrapper">
                    <h2 className="card-title">Register</h2>
                    <button className="close-form-button" onClick={props.closeForm}>X</button> 
                    <form className="form" action="/register" method="POST">
                        <div className="fields">
                            <div className="input-container"> 
                                <input id="input" placeholder="Username" name="username" required></input>
                            </div>
                            <div className="input-container">
                                <input id="input" placeholder="Email" name="email" required></input>
                            </div>
                            <div className="input-container">
                                <input id="input" placeholder="Password" name="password" type='password' required></input>
                            </div>
                            <div className="input-container">
                                <input id="input" placeholder="Confirm password" name="confirmation" type='password' required></input>
                            </div>
                            <div className="btn-container">
                                <input id="submit-btn" type="submit"></input>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        }
        </>

    )
}

export function LoginForm(props){
    return(
        <>
        {props.loginVisible &&
            <div className="form-container">  
                <div className="card-wrapper">
                    <h2 className="card-title">Login</h2>
                    <button className="close-form-button" onClick={props.closeForm}>X</button> 
                    <form className="form" action="/login" method="POST">
                        <div className="fields">
                            <div className="input-container"> 
                                <input id="input" placeholder="Username" name="username" required></input>
                            </div>
                            <div className="input-container">
                                <input id="input" placeholder="Password" name="password" type='password' required></input>
                            </div>
                            <div className="btn-container">
                                <input id="submit-btn" type="submit"></input>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        }
        </>

    )
}