import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer.js'
import NavBar from './containers/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { Redirect, useHistory, withRouter } from 'react-router-dom'
import SearchContainer from './containers/SearchContainer.js'
const BASE_API = "http://localhost:3001/"
class App extends React.Component {
  
  state = {
    user: null
  }

  searchHandler = (e) => {
    e.preventDefault()
    
    let searchValue = (e.target.search.value)
    this.props.history.push(`/search/${searchValue}`)
  }

  loginHandler = (e) => {
    const username = (e.target.username.value)
    const password = e.target.password.value
    let userObj = {username, password}
    console.log(userObj)
  }
  
  signupHandler = (e) => {
    const username = (e.target.username.value)
    const password = e.target.password.value
    const passwordConfirmation = e.target.passwordConfirmation.value
    let user = { username, password }
    let configObj = {
      method: "POST",
      headers: {"accepts": "application/json",
      "content-type": "application/json"},
      body: JSON.stringify({user})
    }
    fetch(BASE_API + 'users', configObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(user.id)
      this.setState({user: data.user.id})})
  }
  
  render() {
    console.log(this.state)
  return (
     <div className="App">
      <NavBar searchHandler={this.searchHandler}/>
      
      <Switch>
        <Route path="/search" render={(routerprops) => <SearchContainer {...routerprops}/>} />
        <Route path="/login" render={(routerprops) => <Login {...routerprops} loginHandler={this.loginHandler}/>} />
        <Route path="/signup" render={(routerprops) => <Signup {...routerprops} signupHandler={this.signupHandler} />} />
        <Route path="/galleries/:galleryId" render={(routerprops) => <GalleryContainer {...routerprops} />} />
       
        
      </Switch>
    </div>
    
  )
  }
}

export default withRouter(App);
