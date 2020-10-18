import React from 'react'
import { Route } from 'react-router-dom';
import Gallery from '../components/Gallery.js'

class GalleryContainer extends React.Component {

     state = {
          api : []
        }
        
        componentDidMount(){
          let token = localStorage.getItem("token")
          fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {headers:
          { Authorization: `Bearer ${token}` }})
          .then(resp => resp.json())
          .then(paintings => {
     
            
            this.setState({ api: paintings})
            console.log(paintings)
          })
          .catch(console.log)
      
        }
    
     
     
     render(){
          console.log("GALLER", this.props)
          return(
               <div className="GalleryContainer">
                    {/* <Gallery paintings={this.state.api}/> */}
               </div>




          ); 
     }



}

export default GalleryContainer 