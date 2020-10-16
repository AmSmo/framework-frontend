import React from 'react'
// import Painting from './components/Painting.js'

class GalleryContainer extends React.Component {

     // state = {
     //      api : [],
     //      user: null
     //    }
        
     //    componentDidMount(){
     //      fetch("http://localhost:3001/paintings/1200")
     //      .then(resp => resp.json())
     //      .then(paintings => {
     //        console.log(paintings)
     //        this.setState({ api: paintings})
     //      })
     //      .catch(console.log)
      
     //    }
    
    
    
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