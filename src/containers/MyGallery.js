import React from 'react'
import Gallery from '../components/Gallery'
import styled from 'styled-components'
const FAVE_API = "http://localhost:3001/users/favorites"     


class MyGallery extends React.Component {
     
     state = {
          favorites : []
     }

     componentDidMount = () => {
          let token = localStorage.getItem("token")
          if (token){
            fetch(FAVE_API, {
              method: "GET", 
              headers: 
                  { "content-type": "application/json",
                  "accepts": "application/json",
                       Authorization: `Bearer ${token}`}})
            .then(resp => resp.json())
            .then(data => {
              this.setState({ favorites : data.paintings})
            })
          
        }
      }

      renderFaves = () => {
           return <Gallery history={this.props.history} paintings={this.state.favorites}/>
      }

      render(){
           return (
               <Background>
                    <h2>Faves</h2>
                    {this.state.favorites.length > 0 ?

                    this.renderFaves()
                    :
                    <div>
                         <img src={'/assets/construction2.png'} />
                    </div>
                    }
               </Background>
                 
           )
      }

     }

export default MyGallery 

const Background = styled.div`
background-image: url("https://i.pinimg.com/originals/df/ea/7d/dfea7db19f0a81745ff1c2b43142d499.jpg"); 
width: 100vw;
height: 100vh;
background-repeat: fill;
    
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-image: url("https://image.freepik.com/free-vector/art-gallery-empty-room-with-white-walls-lamps_107791-1490.jpg"); 
    //     background-image: url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-empty-gallery-room-and-plinth-allan-swart.jpg"); 
    `
    // background-image: url("https://media.artscopemagazine.com/2019/07/Image_AO_Foritano_Harvard_Bauhaus.jpeg"); */
    //     background-image: url("https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"); 
    
    //     background-image: url("https://i.guim.co.uk/img/media/464e642098c2b1dcb82e831da744ae527a2f950a/0_200_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=73eddf40c389269bc0e953ba089e0be8");