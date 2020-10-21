import React from 'react'
import Gallery from '../components/Gallery'
import styled from 'styled-components'
const FAVE_API = "http://localhost:3001/users/favorites"     


class MyGallery extends React.Component {
     
     state = {
          favorites : [],
          width: window.innerWidth,
          height: window.innerHeight
     }

    
     where = (idx, imgHeight) => {
          let adjusted_height = this.state.height
          let adjusted_width = this.state.width
          console.log(imgHeight)
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

               default:
                    return { display: "transparent" }

          }
     }

     

     componentWillUnmount = () => {
          window.removeEventListener("resize", this.updateDimensions)
     }
     updateDimensions = () => {
          this.setState({ width: window.innerWidth, height: window.innerHeight })
     }

     clickHandler = (painting) => {
          (this.props.history.push(`/paintings/${painting.ham_id}`))

     }

     rightSide = () => {
          return this.state.favorites.map((fav, idx) => {

               if (idx % 2 === 0 && idx < 6)
                    return (

                         <img onClick={() => this.clickHandler(fav.painting)} src={fav.painting.image} style={this.where(idx, )} />
                    )
          })
     }
     leftSide = () => {
          return this.state.favorites.map((fav, idx) => {
               
               if (idx % 2 !== 0 && idx < 6)
                    return (
                         <img onClick={() => this.clickHandler(fav.painting)} src={fav.painting.image} style={this.where(idx)} />
                    )
          })
     }

     componentDidMount = () => {
          window.addEventListener('resize', this.updateDimensions)
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
                 console.log(data)
              this.setState({ favorites : data.paintings_with_comments})
            })
          
        }
      }

      renderFaves = () => {
           return <div> stuff</div>
      }

      render(){
           console.log("state", this.state)
           return (
               <Background height={this.state.height} width={this.state.width} >
                    <h2>Faves</h2>
                    {this.state.favorites.length > 0 ?
                          
                               <Hall>
                                    <Left>
                                         {this.leftSide()}
                                    </Left>
                                    <Right>
                                         {this.rightSide()}
                                    </Right>
                               </Hall>
                          
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
     display: inline-block;

     background-image: url("https://i.pinimg.com/originals/df/ea/7d/dfea7db19f0a81745ff1c2b43142d499.jpg"); 
     margin: auto;
     background-position: fixed;
    top: 20px;
    left 0px;
    width: ${props => props.width};
    height: ${props => props.height-30}px;
     background-size: 100% 20%;
    background-position: center;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
   

`


function leftOne(width, height) {
     return {
          position: "fixed",
          left: "-3.5vw",
          width: `${(width / 1357) * 280}px`,
          maxHeight: `${height / 1030 * 270}px`,
          top: "32vh",
          opacity: "1",
          transform: "rotate3d(5, -114, 1, -62deg)"
     }

     // rotate3d(5, -114, 3, -62deg);
}
function leftTwo(width, height) {
     return {
          position: "fixed",
          left: `${10  * width / 1357}vw`,
          width: `${(width / 1357) * 210}px`,
          maxHeight: `${height / 1030 * 270}px`,
          top: "35vh",
          marginLeft: "-00px",
          opacity: ".93",
          transform: "rotate3d(7, -146, 1, -57deg)"
     }
}
function leftThree(width, height) {

     return {
          position: "fixed",
          left: "11vw",
          width: `${(width / 1357) *0.8* 160}px`,
          maxHeight: `${height / 1030 * 270}px`,
          marginLeft: `${(width / 1357) * 380}px`,
          top: "30vh",
          opacity: ".89",
          transform: `rotate3d(2, -172, -3, 0deg)`
     }
}
function rightOne(width, height) {
     return {

          position: "fixed",
          right: "-4vw",
          
          top: "38vh",
          width: `${(width / 1357) * 200}px`,
          maxHeight: `${height / 1030 * 270}px`,
          zIndex: "10",
          transform: "rotate3d(13, 185, -8, -58deg)"
     }
}
function rightTwo(width, height) {
     return {
          position: "fixed",
          right: `${8 *  0.8 *width / 1357}vw`,
          width: `${(width / 1357) * 180}px`,
          opacity: ".93",
          top: `38vh`,
          maxHeight: `${height / 1030 * 270}px`,
          zIndex: "10",
          transform: "rotate3d(6, 193, -10, -54deg)"
     }
}
function rightThree(width, height) {
     return {
          position: "fixed",
          right: "37vw",
          width: `${(width / 1457) *0.7* 180}px`,
          opacity: ".9",
          top: "33vh",
          maxHeight: `${height / 1030 * 230}px`,
          zIndex: "10",
          transform: "rotate3d(6, 174, -10, -0deg)"
     }
}


const Hall = styled.div`
     display: inline-block;
     width: 100vw;
     height: 95vh;
     
     
`
const Right = styled.div`
     float: right;
     height: 90vh;
     perspective: 1600px;
     margin: 3em 3vw; 
     width:100px;
     z-index: 10;
     margin-right: 40px;
     display: flex;
     
`
const Left = styled.div`
     
     float:left;
     height: 90vh;
     perspective: 1600px;
     margin: 3em 3vw; 
     width:100px;
     z-index: 10;
     margin-left: 10px;
     display: flex;
     flex-shrinkg: 1;
`