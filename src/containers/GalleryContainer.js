import React from 'react'
// import Painting from './components/Painting.js'

class GalleryContainer extends React.Component {

     renderPaintings(){
          return this.props.api
     }
     
     render(){
          return(
               <div className="Gallery">
                    <h1>Gallery</h1>
                    {this.renderPaintings()}
               </div>




          ); 
     }



}

export default GalleryContainer 