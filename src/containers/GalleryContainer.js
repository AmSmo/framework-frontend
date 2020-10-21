import React from 'react'
import Map from "../components/Map"
import Gallery from '../components/Gallery.js'
import styled from 'styled-components'


const floorOne = [2300, 2520, 3600, 2120, 2400, 2500, 2540, 3500]
const floorTwo = [3620,2130,2340,2700,1440,2100,2220]

class GalleryContainer extends React.Component {

     state = {
          api : [],
          room_number: 0,
          total_rooms: 1,
          gallery: this.props.match.params.galleryId,
          floor: 1
        }


     onMapClick = (area: AreaType) => {
          this.props.history.push(`/galleries/${area.galleryId}`)
          this.setState({gallery: `${area.galleryId}`})
          this.setState({ floor: this.whatFloor(area.galleryId) })
          
     }

     componentDidUpdate = (prevProps) => {
          if( prevProps.match.params.galleryId !== this.state.gallery){
               let token = localStorage.getItem("token")
               fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {
                    headers:
                         { Authorization: `Bearer ${token}` }
               })
                    .then(resp => resp.json())
                    .then(paintings => {


                         this.setState({
                              api: paintings,
                              total_rooms: Math.ceil(paintings.length / 6) - 1,
                              room_number: 0
                         })

                    })
                    .catch(console.log)

          }
     }
        
     moveForward = (e) => {
          if (this.state.room_number < this.state.total_rooms){
              return this.setState(prevState => {return {room_number: prevState.room_number + 1}})
          }
      
     }
     moveBackward = (e) => {
      
          if (this.state.room_number > 0){
             return  this.setState(prevState => { return { room_number: prevState.room_number - 1 } })
          }
     }
        componentDidMount(){
          let token = localStorage.getItem("token")
             fetch(`http://localhost:3001/galleries/${this.props.match.params.galleryId}`, {headers:
          { Authorization: `Bearer ${token}` }})
          .then(resp => resp.json())
          .then(paintings => {
     
               
            this.setState({ api: paintings,
                 total_rooms: Math.ceil(paintings.length / 6) - 1})
                  

           
          })
          .catch(console.log)
          
        }
    
     
     whatFloor = (gall) => {
          if (floorOne.includes(parseInt(gall))){
               return 1
          } else if (floorTwo.includes(parseInt(gall))){
               return 2
          }
     }

     render(){
          
          console.log(this.state)
          return(
               <div className="GalleryContainer">
                    { this.state.api.length === 0 ? 
                    <Center>
                         <img src={'/assets/loading.gif'} />
                         
                    </Center>
                     :
                     <>
                         <Gallery paintings={this.state.api.slice((this.state.room_number * 6)).slice(0, 6)} moveForward={this.moveForward} moveBackward={this.moveBackward} backward={this.state.room_number === 0} forward={this.state.total_rooms === this.state.room_number} history={this.props.history}/>
                         <Map gallery={this.state.floor} history={this.props.history} onMapClick={this.onMapClick} />
                         </>
                    }
               </div>




          ); 
     }



}

export default GalleryContainer 

const Center = styled.div`
     width: 100vh,
     height: 100vw,
     margin: 50px auto

`

