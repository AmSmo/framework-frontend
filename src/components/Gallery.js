import React from 'react'
import { Card } from 'semantic-ui-react'

import styled from 'styled-components'
class Gallery extends React.Component {

     state = {
          width: window.innerWidth,
          height: window.innerHeight
     }
     where = (idx) => {
          let adjusted_height = this.state.height
          let adjusted_width = this.state.width
          let ratio = window.innerHeight / window.innerWidth
          if (ratio < .5){
               
          }
          switch (idx) {
               case 0:
                    return rightOne(adjusted_width, adjusted_height)
                    break;
               case 1:
                    return leftOne(adjusted_width, adjusted_height)
                    break;
               case 2:
                    return rightTwo(adjusted_width, adjusted_height)
                    break;
               case 3:
                    return leftTwo(adjusted_width, adjusted_height)
                    break;
               case 4:
                    return rightThree(adjusted_width, adjusted_height)
                    break;
               case 5:
                    return leftThree(adjusted_width, adjusted_height)
                    break;
               default :
                    return {display: "transparent"}
                    break;
          }
     }

     componentDidMount = () => {
          window.addEventListener('resize', this.updateDimensions)
     }

     componentWillUnmount = () => {
          window.removeEventListener("resize", this.updateDimensions)
     }
     updateDimensions = () => {
          this.setState({width: window.innerWidth, height: window.innerHeight})
     }

     clickHandler = (painting) => {
          (this.props.history.push(`/paintings/${painting.ham_id}`))
          
     }

     rightSide = () => {
          return this.props.paintings.map((painting, idx) => {
              
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
          console.log("gallery", this.props.paintings )
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
    background-size: contain;
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


function leftOne(width,height){ return {
     position: "fixed",
     left: "-3.5vw",
     width: `${(width/1357)*280}px`,
     maxHeight: `${height/1030 * 270}px`,
     bottom: "30%",
     opacity: "1",
     transform: "rotate3d(-2, -132, 1, -61deg)"}
}
function leftTwo(width, height){return{
     position: "fixed",
     left: "10vw",
     width: `${(width / 1357) * 280}px`,
     maxHeight: `${height / 1030 * 270}px`,
     bottom: "31%",
     marginLeft: "-00px",
     opacity: "1",
     transform: "rotate3d(8, -122, 2, -51deg)"}
}
function leftThree(width, height){
     return {position: "fixed",
     left: "10vw",
          width: `${(width / 1357) * 280}px`,
          maxHeight: `${height / 1030 * 270}px`,
     marginLeft: "200px",
     bottom: "32%",
     opacity: "1",
     transform: "rotate3d(2, -172, -3, -47deg)"}
}
function rightOne(width, height){return{
     
     position: "fixed",
     right: "-4vw",
     bottom: "32%",
     // top: `${height * 0.32}px`,
     width: `${(width/1357)*1.2*280}px`,
     maxHeight: `${height / 1030 * 270}px`,
     zIndex: "10",     
     transform: "rotate3d(6, 164, -10, -59deg)"
}
}
function rightTwo(width, height){return{
     position: "fixed",
     right: "8vw",
     width: `${(width/1357)*1.2*280}px`,
     bottom: "31%",
     // top: `${height * 0.30}px`,
     maxHeight: `${height / 1030 * 270}px`,
     zIndex: "10",
     transform: "rotate3d(6, 193, -10, -54deg)"
}
}
function rightThree(width, height){return{
     position: "fixed",
     right: "20vw",
     width: `${(width/1357)*280*1.2}px`,
     // top: `${height*0.28}px`,
     bottom: "30%",
     maxHeight: `${height / 1030 * 270}px`,
     zIndex: "10",
     transform: "rotate3d(6, 174, -10, -50deg)"
}
}