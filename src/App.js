import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer.js'

class App extends React.Component {
  
  state = {
    api : []
  }
  
  componentDidMount(){
    fetch("http://localhost:3001/paintings/1200")
    .then(resp => resp.json())
    .then(paintings => {
      console.log(paintings)
      this.setState({ api: paintings})
    })

  }

  
  render() {
  return (
     <div className="App">
      <GalleryContainer paintings={this.state.api}/>
    </div>
    
  )
  }
}

export default App;
