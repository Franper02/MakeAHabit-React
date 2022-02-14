import React, { Fragment } from 'react'
import ReactDOM, { render } from 'react-dom';
import {NavBar} from './index/navigation'
import {Front} from './index/front'
import {FormComp} from './forms/form'
import './index.css'

class App extends React.Component {
  render(){
    return (
      <Fragment>
        <NavBar />
        <Front />
      </Fragment>
    
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
