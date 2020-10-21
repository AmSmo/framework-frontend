import React from 'react'
import Map from "../components/Map"
import Gallery from '../components/Gallery.js'
import styled from 'styled-components'
class GalleryContainer extends React.Component {

     state = {
          api : [],
          room_number: 0,
          total_rooms: 1,
          gallery: this.props.match.params.galleryId
        }


     onMapClick = (area: AreaType) => {
          this.props.history.push(`/galleries/${area.galleryId}`)
          return this.setState({gallery: `${area.galleryId}`})
          
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
          total_rooms: Math.ceil(paintings.length/6)- 1})
            
          })
          .catch(console.log)
      
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
                         <Map gallery="1" history={this.props.history} onMapClick={this.onMapClick} />
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

const ArrowForward = styled.img`
     display:inline-block;
     transform: rotate3D(67,-78,91,116deg);;
     opacity: .8;
     height: 150px;
     margin-top: 55vh;
     margin-left: 35px;
     opacity: .8 ;
`
const ArrowBackward = styled.img`
     transform: rotate3D(-161,-157,-243,116deg);
     display:inline-block;
     height: 150px;
     margin-top: 65vh;
     margin-left: 35px;
     opacity: .8;
`

