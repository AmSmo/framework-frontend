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


  
  
  render() {
  return (
     <div className="App">
      <NavBar searchHandler={this.searchHandler}/>
      <GalleryContainer/>
      <Switch>
        <Route path="/search" render={(routerprops) => <SearchContainer {...routerprops}/>} />
        <Route path="/login" render={(routerprops) => <Login {...routerprops}/>} />
        <Route path="/signup" render={(routerprops) => <Signup {...routerprops} />} />
      </Switch>
    </div>
    
  )
  }
}

export default withRouter(App);
