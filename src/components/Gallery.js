import React from 'react'
import { Card } from 'semantic-ui-react'

import styled from 'styled-components'
class Gallery extends React.Component {

     where = (idx) => {

          switch (idx) {
               case 0:
                    return rightOne
                    break;
               case 1:
                    return leftOne
                    break;
               case 2:
                    return rightTwo
                    break;
               case 3:
                    return leftTwo
                    break;
               case 4:
                    return rightThree
                    break;
               case 5:
                    return leftThree
                    break;
               default :
                    return {display: "transparent"}
                    break;
          }
     }



     rightSide = () => {
          return this.props.paintings.map((painting, idx) => {
               if (idx % 2 === 0)
               return (
               
                         <img src={painting.image} style={ this.where(idx) } />
                    )
          })
     }
     leftSide = () => {
          return this.props.paintings.map((painting, idx) => {
               if (idx % 2 !== 0)
               return (
               
                         <img src={painting.image} style={ this.where(idx) } />
                    )
          })
     }
     render(){
     return (
          
          <BackgroundDiv>
               <Hall> 
               <Left>
                    {this.leftSide()}
               </Left>
               <Right>
                    {this.rightSide()}
               </Right>
               </Hall>
          </BackgroundDiv>
     )


     }}
export default Gallery
const Hall = styled.div`
     display: inline-block;
     width: 100vw;
     height: 100vh;
`
const Right = styled.div`
    width: 40vw;
    float: right;
    height: 100vh;
     
`
const Left = styled.div`
     width: 40vw;
     float:left;
     height: 100vh;
`
const BackgroundDiv = styled.div`
content: ' ';
    display: inline-block;
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


const leftOne ={
     width: "250px",
     maxHeight: "300px",
     zIndex: 10
}
const leftTwo ={
     width: "250px",
     maxHeight: "300px",
     zIndex: 10
}
const leftThree ={
     width: "250px",
     maxHeight: "300px",
     zIndex: 10
}
const rightOne ={
     width: "250px",
     maxHeight: "300px",
     zIndex: 10
}
const rightTwo ={
     width: "250px",
     maxHeight: "300px",
     zIndex: 10
}
const rightThree ={
     width: "250px",
     maxHeight: "300px",
     zIndex: 10
}
