import React from 'react'
import Gallery from '../components/Gallery.js'

class GalleryContainer extends React.Component {

     state = {
          api : []
        }
        
        componentDidMount(){
          fetch("http://localhost:3001/galleries/1200")
          .then(resp => resp.json())
          .then(paintings => {
            console.log(paintings)
            let paintingRecords = paintings[records]
            this.setState({ api: paintingRecords})
            console.log(paintings)
          })
          .catch(console.log)
      
        }
    
    
     
     render(){
          return(
               <div className="GalleryContainer">
                    <Gallery paintings={this.state.api}/>
               </div>




          ); 
     }



}

export default GalleryContainer 