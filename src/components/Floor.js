import React from 'react';
import { ImageMap, Area } from '@qiuz/react-image-map';
import styled from 'styled-components'
import { withRouter} from 'react-router-dom'

function Floor(props){

     const onMapClick = (area: AreaType, galleryId: number) => {
          props.history.push(`/galleries/${area.galleryId}`)
          
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
          {galleryId: 3620, "width":"11.604651162790699%","height":"25.216560509554142%","left":"36.27906976744186%","top":"10.77707006369428%","href":""},
          {galleryId: 2130, "width":"6.511627906976744%","height":"14.171974522292993%","left":"29.32231104651163%","top":"33.59872611464968%","href":""},
          {galleryId: 2340, "width":"14.069767441860467%","height":"17.35668789808917%","left":"14.438590116279086%","top":"30.095541401273884%","href":""},
          {galleryId: 2700, "width":"25.930232558139537%","height":"18.949044585987263%","left":"14.671148255813954%","top":"55.73248407643312%","href":""},
          {"width":"8.837209302325581%","height":"6.8471337579617835%","left":"29.787427325581394%","top":"76.11464968152866%","href":""},
          {galleryId: 1440, "width":"18.72093023255814%","height":"19.10828025477707%","left":"66.18277616279072%","top":"55.57324840764332%","href":""},
          {galleryId: 2100,"width":"18.953488372093023%","height":"16.878980891719745%","left":"65.71765988372093%","top":"30.573248407643312%","href":""},
          {galleryId: 2220,"width":"11.279069767441863%","height":"21.656050955414013%","left":"51.64789244186046%","top":"11.46496815286631%","href":""}
          
     ]



     const ImageMapComponentTwo = React.useMemo(
          () => (
               <ImageMap
                    className="map"
                    src={(imgTwo)}
                    map={mapAreaTwo}
                    onMapClick={onMapClick}
                    // style={BoxTwo}
                    />
          ),
          [mapAreaTwo, imgTwo]
     );

     
 const renderMapOne = () => {
          return (
                <div className="mapOne">
                  {ImageMapComponentOne}    
                </div>
          )
     }


     const renderMapTwo = () => {
       return (
 <div>
     {ImageMapComponentTwo}
</div>
       )
  }



const renderBoth = () => {
     return (
          <>
      <div className="mapOne">
        {ImageMapComponentOne}    
          </div>
          <div className="mapTwo">
          {ImageMapComponentTwo}
          </div>
          </>
     )
}
   







if(props.match.path === "/maps") {
     console.log(props)
     return (
     renderBoth()
     )
} else if(props.match.params.id === "1"){
          return(
     renderMapOne()
          )
} else if(props.match.params.id === "2"){
          return(
     renderMapTwo()
          )
     }

     


}
     
        


     
  
   
   
        




export default Floor

const Box = styled.div`
top: 40px;
height: 450px;
width: 300px;
`
// const BoxTwo = styled.div`
// margin: 30px auto;
// display: none;
// width: 1100px;
// height: 1200px;
// position: relative;
// ``
