import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer.js'
import NavBar from './containers/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import { withRouter } from 'react-router-dom'
import SearchContainer from './containers/SearchContainer.js'
import MapContainer from './containers/MapContainer.js'
import PaintingContainer from './containers/PaintingContainer.js'
import MyGallery from './containers/MyGallery.js'
import Welcome from './components/Welcome'
import OtherGals from './containers/OtherGals'
const BASE_API = "http://localhost:3001/"

class App extends React.Component {
  
  state = {
    user: null
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token")
    if (token){
      fetch(BASE_API+"auth", {
        method: "GET", 
        headers: 
            { Authorization: `Bearer ${token}`}})
      .then(resp => resp.json())
      .then(data => {
        this.setState({user: data.user })
        
      })
    
  }
}


  searchHandler = (artist) => {
    console.log(artist)
    return this.props.history.push(`/search/${artist}`)
  }

  loginHandler = (e) => {
    const username = (e.target.username.value)
    const password = e.target.password.value
    let user = {username, password}
    let configObj = {
      method: "POST",
      headers: {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user })
    }
    
    fetch(BASE_API + 'login', configObj)
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt)
        this.setState({ user: data.user })
      })
  }
  
  signupHandler = (e, portrait) => {
    const username = (e.target.username.value)
    const password = e.target.password.value
    const passwordConfirmation = e.target.passwordConfirmation.value
    let user = { username, password, portrait }
    let configObj = {
      method: "POST",
      headers: {"accepts": "application/json",
      "content-type": "application/json"},
      body: JSON.stringify({user})
    }
    
    fetch(BASE_API + 'users', configObj)
    .then(resp => resp.json())
    .then(data => {
      
      localStorage.setItem("token", data.jwt)
      this.setState({user: data.user})
      this.props.history.push("/maps")})
    }
      
  

  logout = () => {
    this.setState({user: null})
    localStorage.removeItem("token")
  }
  
  setUser = (newUser) => {
    
    return this.setState({user: newUser})
  }
  
  render() {
  return (
     <div className="App">
      <NavBar searchHandler={this.searchHandler} logout={this.logout}/>
        { this.state.user !== null ?
      <Switch>
      
        <Route path="/search/:keyword" render={(routerprops) => <SearchContainer {...routerprops}/>} />
        <Route path="/login" render={(routerprops) => <Welcome {...routerprops} user={this.state.user}/>} />
        <Route path="/signup" render={(routerprops) => <Signup {...routerprops} signupHandler={this.signupHandler} />} />
        <Route path="/favorites/" render={(routerprops) => <MyGallery {...routerprops} mine={true}  />}/>
        <Route path="/galleries/others/" render={(routerprops) => <OtherGals {...routerprops} /> }/>
        <Route path="/galleries/:galleryId" render={(routerprops) => <GalleryContainer {...routerprops} />} />
        <Route path="/paintings/:paintingId" render={(routerprops) => <PaintingContainer {...routerprops} />}/>
          <Route path="/gallery/:userId" render={(routerprops) => <MyGallery {...routerprops} />}/>
        <Route path="/maps" render={(routerprops) => <MapContainer {...routerprops} />}/>
        <Route path="/" render={(routerprops) => <Welcome {...routerprops} user={this.state.user} loginHandler={this.loginHandler} setUser={this.setUser}/>}/>
      </Switch>
        
        :
        <Switch>
          <Route path="/login" render={(routerprops) => <Login {...routerprops} loginHandler={this.loginHandler} />} />
          <Route path="/signup" render={(routerprops) => <Signup {...routerprops} signupHandler={this.signupHandler} />} />
          <Route path="/" render={(routerprops) => <Welcome {...routerprops} user={this.state.user} loginHandler={this.loginHandler} />}/>
        </Switch>
  }
    </div>
    
  )
  }
}

export default withRouter(App);
