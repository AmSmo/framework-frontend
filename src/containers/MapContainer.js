import React from "react";
import Floor from '../components/Floor.js';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components'

class MapContainer extends React.Component {

     state = {
          api : []
     }
     
     componentDidMount= () => {
          let token = localStorage.getItem("token")
          fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {
               method: "GET",
               headers:
                    { Authorization: `Bearer ${token}` }
          })
          .then(resp => resp.json())
          .then(paintings => {
            
            this.setState({ api: paintings})
           
          })
          .catch(console.log)
      
        }
    
     
    
     
     
     
     render(){
  

          return(
          
          <Color> 
          <h1 style={{color: "gold", fontSize: "50px"}}>Maps</h1>
               <Switch>
               <Route path='/maps/:id' render={(routerprops) => <Floor history={this.props.history} {...routerprops}/>}/>
               <Route path="/maps" render={(routerprops) => <Floor history={this.props.history} {...routerprops}  />}/>
               </Switch>
               </Color>

          
               )
     }
}


export default MapContainer

const Color = styled.div`
background: #0A738A;
height: 100vh;
width: 100vw;
`

// const Wallpaper = styled.div`
// background-image: url('/assets/BranchesWallpaper.png');
// height: 100%,
// width: 100vw,     
// `