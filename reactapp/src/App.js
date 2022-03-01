import React, { Fragment } from 'react'
import ReactDOM, { render } from 'react-dom';
import NavBar from './index/navigation'
import Front from './index/front'
import FormComp from './forms/form'
import './index.css'

export default function App(){

  const[registerVisible, toggleRegisterVisible] = React.useState(false)
  const[loginVisible, toggleLoginVisible] = React.useState(false)


  function toggleRegister(){
    if (loginVisible){toggleLogin()}
    toggleRegisterVisible(prevRegisterVisible => !prevRegisterVisible) 
  }

  function toggleLogin(){
    if (registerVisible){toggleRegister()}
    toggleLoginVisible(prevLoginVisible => !prevLoginVisible) 
  }

  function closeForm(){
    registerVisible ? toggleRegister() : toggleLogin()
  }
  return (
    <>
      <NavBar 
          registerVisible = {registerVisible} 
          toggleRegister = {toggleRegister} 
          loginVisible = {loginVisible} 
          toggleLogin = {toggleLogin} 
          closeForm = {closeForm}
        />
      <Front 
        registerVisible = {registerVisible} 
        toggleRegister = {toggleRegister} 
        loginVisible = {loginVisible} 
        toggleLogin = {toggleLogin}
        closeForm = {closeForm}
      />
    </>
  
  );
}