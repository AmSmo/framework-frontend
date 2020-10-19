import React from 'react'
import { Route } from 'react-router-dom';
import Gallery from '../components/Gallery.js'

class GalleryContainer extends React.Component {

     state = {
          api : [],
          room_number: 0,
          total_rooms: 1
        }
        
     moveForward = () => {
          if (this.state.room_number < this.state.total_rooms){
               console.log(this.stateroom_number +1)
          }else{
               console.log("not possible")
          }
     }
     moveBackward = () => {
          if (this.state.room_number > 0){
               console.log(this.state.room_number - 1)
          }else{
               console.log("not possible")
          }
     }
        componentDidMount(){
          let token = localStorage.getItem("token")
          fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {headers:
          { Authorization: `Bearer ${token}` }})
          .then(resp => resp.json())
          .then(paintings => {
            console.log(paintings)
            let paintingRecords = paintings[records]
            this.setState({ api: paintingRecords})
            console.log(paintings)
          })
          .catch(console.log)
      
        }
    
     
     
     render(){
          console.log("GC", this.state.api)
          return(
               <div className="GalleryContainer">
                    <Gallery paintings={this.state.api.slice((this.state.room_number * 6)).slice(0, 6)} history={this.props.history}/>
               </div>




          ); 
     }



}

export default GalleryContainer 