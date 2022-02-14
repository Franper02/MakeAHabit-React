import React, { Fragment } from "react";
import './front.css'
import { FormComp } from "../forms/form";

export class Front extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false,
        };
    }

    toggleForm(bool){
        this.setState({
            visible : bool
        })
    }

    render(){
        return(
            <Fragment>
            <FormComp visible = {this.state.visible}/>
                <div className="front-page-wrapper">
                    <div className="front-page">
                        <h1 className="title">Make<br/> A <br/>Habit.</h1>
                        <h4 className="subtitle">Build a habit and register your progress daily</h4>
                        <div className="button-container" onClick={() => this.toggleForm(!this.state.visible)}>
                            Get Started
                        </div>
                        <div className="wave">
                        </div>
                    </div>
                </div>
            </Fragment>
    
        )
    }

}