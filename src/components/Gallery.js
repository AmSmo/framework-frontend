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

     clickHandler = (painting) => {
          console.log(this.props.history.push(`/paintings/${painting.ham_id}`))
          
     }

     rightSide = () => {
          return this.props.paintings.map((painting, idx) => {
               console.log(painting, idx)
               if (idx % 2 === 0)
               return (
               
                         <img onClick={() => this.clickHandler(painting)} src={painting.image} style={ this.where(idx) } />
                    )
          })
     }
     leftSide = () => {
          return this.props.paintings.map((painting, idx) => {
               if (idx % 2 !== 0)
               return (
                    <img onClick={() => this.clickHandler(painting)} src={painting.image} style={ this.where(idx) } />
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
     height: 95vh;
     overflow:scroll;
     
`
const Right = styled.div`
     float: right;
     height: 950px;
     perspective: 1600px;
     margin: 3em 3vw; 
     width:100px;
     z-index: 10;
     margin-right:50px;
     display: flex;
     
`
const Left = styled.div`
     
     float:left;
     height: 950px;
     perspective: 1600px;
     margin: 3em 3vw; 
     width:100px;
     z-index: 10;
     margin-left: 50px;
     display: flex;
`
const BackgroundDiv = styled.div`
content: ' ';
    display: inline-block;
    background-position: fixed;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
    flex;
    left: 0;
    top: 20px;
    width: 1200px;
    height: 100vh;
    z-index: 1;
    opacity: 0.9;
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
     position: "fixed",
     left: "-3.5vw",
     width: "280px",
     maxHeight: "300px",
     bottom: "30%",
     opacity: "1",
     transform: "rotate3d(-2, -132, 1, -61deg)"
}
const leftTwo ={
     position: "fixed",
     left: "10vw",
     width: "280px",
     maxHeight: "300px",
     bottom: "31%",
     marginLeft: "-00px",
     opacity: "1",
     transform: "rotate3d(8, -122, 2, -51deg)"
}
const leftThree ={
     position: "fixed",
     left: "10vw",
     width: "280px",
     maxHeight: "300px",
     marginLeft: "200px",
     bottom: "32%",
     opacity: "1",
     transform: "rotate3d(2, -172, -3, -47deg)"
}
const rightOne ={
     
     position: "fixed",
     right: "-1vw",
     bottom: "30%",
     width: "220px",
     maxHeight: "270px",
     zIndex: "10",     
     transform: "rotate3d(-4, 164, 10, -59deg)"

}
const rightTwo ={
     position: "fixed",
     right: "10vw",
     width: "220px",
     bottom: "31%",
     maxHeight: "270px",
     zIndex: "10",
     transform: "rotate3d(6, 193, 13, -54deg)"
}

const rightThree ={
     position: "fixed",
     right: "22vw",
     width: "220px",
     bottom: "32%",
     maxHeight: "270px",
     zIndex: "10",
     transform: "rotate3d(17, 174, -7, -47deg)"
}
