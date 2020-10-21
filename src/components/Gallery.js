import React from 'react'

import styled from 'styled-components'
class Gallery extends React.Component {

     state = {
          width: window.innerWidth,
          height: window.innerHeight
     }
     where = (idx) => {
          let adjusted_height = this.state.height
          let adjusted_width = this.state.width
          
          switch (idx) {
               case 0:
                    return rightOne(adjusted_width, adjusted_height)
                    
               case 1:
                    return leftOne(adjusted_width, adjusted_height)
                    
               case 2:
                    return rightTwo(adjusted_width, adjusted_height)
                    
               case 3:
                    return leftTwo(adjusted_width, adjusted_height)
                    
               case 4:
                    return rightThree(adjusted_width, adjusted_height)
                    
               case 5:
                    return leftThree(adjusted_width, adjusted_height)
                    
               default :
                    return {display: "transparent"}
                    
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
               
                    <img key={idx} onClick={() => this.clickHandler(painting)} src={painting.image} style={ this.where(idx) } />
                    )
          })
     }
     leftSide = () => {
          return this.props.paintings.map((painting, idx) => {
               if (idx % 2 !== 0)
               return (
                    <img key={idx} className='scale-up-center' onClick={() => this.clickHandler(painting)} src={painting.image} style={ this.where(idx) } />
                    )
          })
     }
     render(){
         
     return (
          
          <BackgroundDiv>
                    
               <Hall> 
               <Left className="fadein">
                    {this.leftSide()}
               </Left>
               
                    <ArrowForward src={'/assets/foward.png'} style={this.props.forward ? { opacity: "0" } : { opacity: ".8" }} onClick={this.props.moveForward}/>
                    <ArrowBackward src={'/assets/foward.png'} style={this.props.backward ? { opacity: "0" } : { opacity: ".8" }} onClick={this.props.moveBackward}/>
              
               <Right>
                    {this.rightSide()}
               </Right>
               
               </Hall>
               
               
          </BackgroundDiv>
     )


     }}
export default Gallery

const ArrowForward= styled.img`
     display:inline-block;
     transform: rotate3D(67,-78,91,116deg);;
     opacity: .8;
     height: 120px;
     margin-top: 55vh;
     margin-left: 35px;
     opacity: .8 ;
     
`
const ArrowBackward= styled.img`
     transform: rotate3D(-161,-195,-243,116deg);
     display:inline-block;
     height: 120px;
     margin-top: 55vh;
     margin-left: 35px;
     opacity: .8;
     bottom: 300px;
`

const Hall = styled.div`
     display: inline-block;
     width: 100vw;
     height: 95vh;
     
     
`
const Right = styled.div`
     float: right;
     
     perspective: 1600px;
     margin: 3em 3vw; 
     width:100px;
     z-index: 10;
     margin-right:50px;
     display: flex;
     
`
const Left = styled.div.attrs(props => ({className: "fadein"}))`
     
     float:left;
     
     perspective: 1600px;
     margin: 3em 3vw; 
     width:100px;
     z-index: 10;
     margin-left: 50px;
     display: flex;
     flex-shrink: 1;
`
const BackgroundDiv = styled.div`
content: ' ';
    display: inline-block;
    background-position: fixed;
    flex-wrap: wrap;
    justify-content: space-around;
    
    background-size: contain;
    left: 0;
    top: 20px;
    width: 100vw-30;
    height: 98vh-24;
    z-index: 1; 
    
  background-image: url("/assets/hallway.png"); 
    
    
    background-position: center;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
   
    `


function leftOne(width,height){ return {
     position: "fixed",
     left: "-3.5vw",
     width: `${(width/1357)*260}px`,
     maxHeight: `${height/1030 * 260}px`,
     top: "35vh",
     
     opacity: "1",
     transform: "rotate3d(-32, -128, -15, -52deg)"}
}
function leftTwo(width, height){return{
     position: "fixed",
     left: "10vw",
     width: `${(width / 1357) * 260}px`,
     maxHeight: `${height / 1030 * 230}px`,
     top: "33vh",
     marginLeft: "-00px",
     opacity: ".95",
     transform: "rotate3d(-32, -157, -22, -56deg)"}
}
function leftThree(width, height){
     
     return {position: "fixed",
     left: "10vw",
          width: `${(width / 1357) * 260}px`,
          maxHeight: `${height / 1030 * 200}px`,
          marginLeft: `${(width / 1357) * 180}px`,
          top: "32vh",
     opacity: ".9",
          transform: `rotate3d(-26, -120, -18, -56deg)`}
}
function rightOne(width, height){return{
     
     position: "fixed",
     right: "-6vw",
     
     top: `29vh`,
     width: `${(width/1357)*280}px`,
     maxHeight: `${height / 1030 * 200}px`,
     zIndex: "10",     
     transform: "rotate3d(-30, 156, 30, -70deg)"
}
}
function rightTwo(width, height){return{
     position: "fixed",
     right: "8vw",
     width: `${(width/1357) *270}px`,
     
     top: `29vh`,
     maxHeight: `${height / 1030 * 230}px`,
     zIndex: "10",
     transform: " rotate3d(-30, 177, 32, -63deg)"
}
}
function rightThree(width, height){return{
     position: "fixed",
     right: "20vw",
     width: `${(width/1357)*280}px`,
     top: `30vh`,
     maxHeight: `${height / 1030 * 210}px`,
     opacity: ".88",
     transform: "rotate3d(-29, 184, 36, -63deg)"
}
}