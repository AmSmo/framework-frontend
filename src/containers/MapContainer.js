<<<<<<< HEAD
import React from "react";
import { ImageMap, Area } from '@qiuz/react-image-map';
import Floor from '../components/Floor.js';
=======
import React from "react"

import Floor from '../components/Floor.js'
 
>>>>>>> main

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
<<<<<<< HEAD
=======
           
>>>>>>> main
          })
          .catch(console.log)
      
        }
    
     
    
     
     
     
     render(){
<<<<<<< HEAD
          
=======
         
>>>>>>> main
          return(
          <div className="maps-container">
               <h1>Maps</h1>
    
               <Floor history={this.props.history} />
          </div>
               )
     }
}


export default MapContainer