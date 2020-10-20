import React from "react";
import Floor from '../components/Floor.js';

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
          <div className="maps-container">
               <h1>Maps</h1>
    
               <Floor history={this.props.history} />
          </div>
               )
     }
}


export default MapContainer