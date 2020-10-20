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
                 console.log(data)
              this.setState({ favorites : data.paintings_with_comments})
            })
          
        }
      }

      renderFaves = () => {
           return <div> stuff</div>
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
     display: inline-block;

     background-image: url("https://i.pinimg.com/originals/df/ea/7d/dfea7db19f0a81745ff1c2b43142d499.jpg"); 
     margin: auto;
     background-position: fixed;
    top: 20px;
    left 0px;
    width: 98vw;
    height: 98vh;
     background-size: contain;
    background-position: center;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
   

`
