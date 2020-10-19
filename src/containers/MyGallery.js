import React from 'react'
import Gallery from '../components/Gallery'
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
               <div>
                    <h2>Faves</h2>
                    {this.renderFaves()}
               </div>

           )
      }

}

export default MyGallery