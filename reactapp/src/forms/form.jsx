import React from "react";
import './form.css'

export class FormComp extends React.Component{
    render(){
        return(
            <>
            {this.props.visible &&
                <div className="form-container">  
                    <div className="card-wrapper">
                        <h2 className="card-title">Register</h2>
                        <form className="form" action="{% url 'habits:register'  %}" method="POST">
                            <div className="fields">
                                <div className="input-container"> 
                                    <input id="input" placeholder="Username" name="username" required></input>
                                </div>
                                <div className="input-container">
                                    <input id="input" placeholder="Email" name="email" required></input>
                                </div>
                                <div className="input-container">
                                    <input id="input" placeholder="Password" name="password" required></input>
                                </div>
                                <div className="input-container">
                                    <input id="input" placeholder="Confirm password" name="confirmation" required></input>
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

}