import React from 'react'
import { Card } from 'semantic-ui-react'
import Painting from './Painting.js'

class Gallery extends React.Component {

     renderPaintings = () => {
          if (this.props.paintings.length > 0){
          return this.props.paintings.map(painting => <Painting key={painting.id} painting={painting}/>)
     }}


     render(){
     return (
          <div className="gallery">
               {this.renderPaintings()}
               </div>
     )
}


}
export default Gallery