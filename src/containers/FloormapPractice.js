import React, {useState} from 'react'
import ImageMapper from 'react-image-mapper'


class FloorMapPractice extends React.Component {
     // let URL= "https://www.worcesterart.org/information/images/map-01.jpg" 
      


     
     state = {
        mapAreas: {       
               name: "map",
               areas: [
                    {id: 1, shape: "rect", coords:[316,242,228,145], preFillCollor: "green", fillColor: "blue"},
                    {id: 2, shape: "rect", coords:[413,146,346,242], preFillColor: "pink"},
                    {id: 3, shape: "rect", coords: [537,234,463,338], preFillColor: "red"}
               ]
               }
          }
     

      
        
     handleUpadateMapArea = (e) => {
     updateMapArea((1,2,3)[evt.nativeEvent.layerX, evt.nativeEvent.layerY, 10])}
     }
      
     updateMapArea = (id, coords) => {
          
              const areas = mapAreas.areas.map(item =>
                item.id === id ? { ...item, coords } : item
              );
         }
         setMapAreas({
          name: mapAreas.name,
          areas
        });

                  
          render() {
          return(

               <div className="container">
                    <ImageMapper src="https://www.worcesterart.org/information/images/map-01.jpg"  map={mapAreas} width={500} />
                    onImageClick={handUpdateMapArea


               </div>
          )
      
     }
}


export default FloorMapPractice