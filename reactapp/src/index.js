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
        visible : false,
    };

    this.toggleForm = this.toggleForm.bind(this)
}

toggleForm(bool){
    this.setState({
        visible : bool
    })
}

  render(){
    return (
      <Fragment>
        <NavBar visible = {this.state.visible} toggleForm = {this.toggleForm} />
        <Front visible = {this.state.visible} toggleForm = {this.toggleForm} />
      </Fragment>
    
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
