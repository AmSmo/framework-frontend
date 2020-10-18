import React from 'react'
import { Card } from 'semantic-ui-react'
import Painting from './Painting.js'
import styled from 'styled-components'
class Gallery extends React.Component {

     renderPaintings = () => {
          if (this.props.paintings.length > 0){
          return this.props.paintings.map(painting => <Painting key={painting.id} painting={painting}/>)
     }}


     render(){
     return (
          
          <BackgroundDiv>
               {this.renderPaintings()}
          </BackgroundDiv>
     )


}
}
export default Gallery

const BackgroundDiv = styled.div`
content: ' ';
    display: flexbox;
    background-position: fixed;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: scroll;
    flex;
    left: 0;
    top: 20px;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    opacity: 0.8;
    /* background-image: url("https://media.artscopemagazine.com/2019/07/Image_AO_Foritano_Harvard_Bauhaus.jpeg"); */
    /* background-image: url("https://i.pinimg.com/originals/df/ea/7d/dfea7db19f0a81745ff1c2b43142d499.jpg"); */
    /* background-image: url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-empty-gallery-room-and-plinth-allan-swart.jpg"); */
    /* background-image: url("https://image.freepik.com/free-vector/art-gallery-empty-room-with-white-walls-lamps_107791-1490.jpg"); */
    background-image: url("https://i.guim.co.uk/img/media/464e642098c2b1dcb82e831da744ae527a2f950a/0_200_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=73eddf40c389269bc0e953ba089e0be8");
    /* background-image: url("https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"); */
    
    background-repeat: fill;
    background-position: 50% 20%;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    width: 100vw;
    min-width: 200px;
    
`