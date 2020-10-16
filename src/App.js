import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GalleryContainer from './containers/GalleryContainer.js'

class App extends React.Component {

  state = {
    api: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/paintings/1200")
      .then(resp => resp.json())
      .then(paintings => {
        console.log(paintings)
        this.setState({ api: paintings })
      })
      .catch(console.log)

  }


  render() {
    return (
      <div className="App">
        <GalleryContainer paintings={this.state.api} />
        <div className="right">
          <div className="wrapper">
            <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
          </div>
          <div className="wrapper">
            <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
          </div>
          <div className="wrapper">
            <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
          </div>
          <div className="wrapper">
            <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
          </div>
        </div>
        
        <div className="left">
            <div className="wrapper">
              <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
            </div>
            <div className="wrapper">
              <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
            </div>
            <div className="wrapper">
              <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
            </div>
            <div className="wrapper">
              <img className="inner" src="https://ids.lib.harvard.edu/ids/view/10747035" width="300px" />
            </div>
          </div>
        <div className="middle">
          I M IN THE MIDDLE
        </div>
      </div>

    )
  }
}

export default App;
