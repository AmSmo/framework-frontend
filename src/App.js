import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer.js'
import NavBar from './containers/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { Redirect, useHistory } from 'react-router-dom'

class App extends React.Component {
  
  state = {
    api : [],
    user: null
  }

  searchHandler = (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
  }
  
  componentDidMount(){
    fetch("http://localhost:3001/paintings/1200")
    .then(resp => resp.json())
    .then(paintings => {
      console.log(paintings)
      this.setState({ api: paintings})
    })
    .catch(console.log)

  }

  
  
  render() {
  return (
     <div className="App">
      <NavBar searchHandler={this.searchHandler}/>
      <GalleryContainer paintings={this.state.api}/>
      <Switch>
        <Route path="/login" render={(routerprops) => <Login {...routerprops}/>} />
        <Route path="/signup" render={(routerprops) => <Signup {...routerprops} />} />
      </Switch>
    </div>
    
  )
  }
}

export default App;
