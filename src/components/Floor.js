import React from 'react';
import { ImageMap, Area } from '@qiuz/react-image-map';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components'

function Floor(props){

     const onMapClick = (area: AreaType, galleryId: number) => {
          props.history.push(`galleries/${area.galleryId}`)
          
     }
    

     
     const imgOne = "/assets/FirstFloor.jpg"

     const mapAreaOne = [
     {galleryId: 2300, "width":"22.33177022274326%","height":"20.260105448154647%","left":"13.481828839390387%","top":"27.089630931458686%","href":""},
     {galleryId: 2520, "width":"25.73153575615475%","height":"21.490333919156406%","left":"14.419695193434936%","top":"55.912126537785575%","href":""},
     {"width":"4.8065650644783116%","height":"9.490333919156415%","left":"40.96937280187573%","top":"77.32864674868189%","href":""},
     {galleryId: 3600, "width":"15.357561547479484%","height":"13.884007029876976%","left":"54.92013481828839%","top":"73.11072056239016%","href":""},
     {galleryId: 2120, "width":"15.357561547479484%","height":"22.144112478031634%","left":"70.86386283704572%","top":"55.5360281195079%","href":""},
     {galleryId: 2400, "width":"23.329425556858148%","height":"19.859402460456945%","left":"63.8298651817116%","top":"27.065026362038648%","href":""},
     {galleryId: 2500, "width":"11.723329425556859%","height":"28.471001757469246%","left":"52.341002344665874%","top":"5.448154657293433%","href":""},
     {galleryId: 2540, "width":"16.060961313012896%","height":"28.471001757469246%","left":"36.162807737397415%","top":"5.448154657293433%","href":""},
     {galleryId: 3500,"width":"6.447831184056271%","height":"10.017574692442881%","left":"36.280041031652985%","top":"34.2706502636203%","href":""},
     {"width":"6.447831184056271%","height":"10.017574692442881%","left":"57.4992672919109%","top":"37.4340949033391%","href":""},
     {"width":"12.192262602579133%","height":"20.035149384885763%","left":"43.900205158264946%","top":"52.54833040421792%","href":""}
     ]

     const ImageMapComponentOne = React.useMemo(
     () => (
          <ImageMap
               className="map"
               src={(imgOne)}
               map={mapAreaOne}
               onMapClick={onMapClick}
               
               />
     ),
     [mapAreaOne, imgOne]
);


     const imgTwo = "/assets/SecondFloor.jpg"

     const mapAreaTwo = [
          {galleryId: 3620, "width":"9.74418604651163%","height":"12%","left":"38.25581395348838%","top":"33.493261455525605%","href":""},
          {galleryId: 2130, "width":"5.6976744186046515%","height":"6.46900269541779%","left":"32.46184593023255%","top":"44.47439353099732%","href":""},
          {galleryId: 2340, "width":"11.976744186046512%","height":"8.086253369272237%","left":"20.01998546511628%","top":"42.76729559748429%","href":""},
          {galleryId: 2700, "width":"21.86046511627907%","height":"9.254267744833783%","left":"20.252543604651162%","top":"54.71698113207546%","href":""},
          {"width":"7.674418604651163%","height":"3.234501347708895%","left":"32.926962209302324%","top":"64.77987421383648%","href":""},
          {galleryId: 1440,"width":"16.51162790697674%","height":"9.344115004492364%","left":"63.04324127906978%","top":"54.627133872416934%","href":""},
          {galleryId: 2100,"width":"16.395348837209305%","height":"7.996406109613657%","left":"63.27579941860465%","top":"42.857142857142854%","href":""},
          {galleryId: 2220,"width":"11.046511627906977%","height":"10.781671159029651%","left":"49.7874273255814%","top":"33.33333333333333%","href":""},
          {"width":"5.116279069767442%","height":"4.0431266846361185%","left":"56.29905523255814%","top":"46.091644204851754%","href":""},
          {"width":"5%","height":"4.40251572327044%","left":"38.62463662790698%","top":"45.73225516621743%","href":""}
     ]


     const ImageMapComponentTwo = React.useMemo(
          () => (
               <ImageMap
                    className="map"
                    src={(imgTwo)}
                    map={mapAreaTwo}
                    onMapClick={onMapClick}
                    />
          ),
          [mapAreaTwo, imgTwo]
     );

     
     // if this.props.match.mapId === 3 
     // <Immap1>

     return (
              <div>
                    {ImageMapComponentOne}
           
              
                    {ImageMapComponentTwo}
               </div>
          
     )

     // renderBothMaps = () => {
     //      return (
     //           <Box>
     //                {ImageMapComponentOne}
                    
     //                {ImageMapComponentTwo}
               
     //           </Box>
     //      )
     // }

     // renderMapOne = () => {
     //      return (
     //           <Box>
     //                {ImageMapComponentOne}
     //           </Box>    
     //      ) 
     // }

     // renderMapTwo = () => {
     //      return (
     //           <Box>
     //                {ImageMapComponentTwo}
     //           </Box>  
     //      )
     // }
          


}
export default Floor

const Box = styled.div`
margin: 30px auto;
display: block;
width: 1100px;
height: 1200px;

`
