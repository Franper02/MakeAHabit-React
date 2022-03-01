import React, { Fragment } from 'react'
import ReactDOM, { render } from 'react-dom';
import {NavBar} from './index/navigation'
import {Front} from './index/front'
import {FormComp} from './forms/form'
import './index.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        registerVisible : false,
        loginVisible : false,
    };

    this.toggleRegister = this.toggleRegister.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
}

toggleRegister(bool){
    if(this.state.loginVisible === false){
        this.setState({
          registerVisible : bool
      })
    }
    else{
      this.toggleLogin(false)
      this.setState({
        registerVisible : bool
      })
    }

}

toggleLogin(bool){
  if(this.state.registerVisible === false){
    this.setState({
      loginVisible : bool
    })
  }
  else{
    this.toggleRegister(false)
    this.setState({
      loginVisible : bool
    })
  }
}

  render(){
    return (
      <Fragment>
        <NavBar 
            registerVisible = {this.state.registerVisible} 
            toggleRegister = {this.toggleRegister} 
            loginVisible = {this.state.loginVisible} 
            toggleLogin = {this.toggleLogin} 
          />
        <Front 
          registerVisible = {this.state.registerVisible} 
          toggleRegister = {this.toggleRegister} 
          loginVisible = {this.state.loginVisible} 
          toggleLogin = {this.toggleLogin}
        />
      </Fragment>
    
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
