import React from 'react';
import styled from 'styled-components'
import Login from './Login'

class Welcome extends React.Component {
   

    render() {
        
        return (

            <>
                
                {this.props.user ? 
                <div style={frameSplash}> 
                        <h2>Welcome {this.props.user.username} </h2>
                    
                    <img  onLoad={this.imageDimensions} src={this.props.user.portrait} style={{borderRadius: "40px"}}width="250px"/>
                    <Targets>
                        <Target src={'/assets/otherusers.png'} />
                        <Target src={'/assets/mygallery.png'} />
                        <Target src={'/assets/floorplan.png'} />
    
                    </Targets>
                    
                </div>
                : 
                <Login history={this.props.history} loginHandler={this.props.loginHandler} />}
            </>

        )
    }


}

export default Welcome
const frameSplash = {
    // background: "rgba(10, 138, 10, 0.450)",
    background: `url('/assets/regalwallpaper.jpg')`,
    height: "100vh",
    width: "100%",
    // background: "red",
    display: "inline-table",
    opacity: ".9"
}


const imgStyle = {
    // height: "600px",
    left: "50%",
    marginTop: "-300px",
    marginLeft: "-600px",
    position: "absolute",
    top: "50%",
    width: "1200px",
        
    

}


const Targets = styled.div`
    margin: 10px auto;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 70%;
    flex-wrap: wrap;
    align-content: stretch;
    img:first-of-type, img:last-of-type {
        margin-top: 40px;
    }

`

const Target = styled.img`
    display:block;
    width: 250px;
    height: 220px;
    opacity: .9;
    
`