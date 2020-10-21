import React from 'react';
import styled from 'styled-components'
import Login from './Login'
import { withRouter } from 'react-router-dom'
import { Form, Button} from 'semantic-ui-react'
class Welcome extends React.Component {
   
    state = {
        clicked: false
    }
    formClick = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }

    colorChange = (e) => {
        e.target.style.color = "gold"
    }

    normal = (e) => {
        e.target.style.color = "black"
    }

    render() {
        
        return (

            <>
                
                {this.props.user ? 
                <div style={frameSplash}> 
                        <h2>Welcome {this.props.user.username} </h2>
                    
                    <img  onLoad={this.imageDimensions} src={this.props.user.portrait} style={{borderRadius: "40px"}}width="250px"/>
                    <Targets>
                            <Target src={'/assets/otherusers.png'} onClick={() => this.props.history.push('/galleries/others')} />
                            <Target src={'/assets/mygallery.png'} onClick={() => this.props.history.push('/favorites')} />
                            <Target src={'/assets/floorplan.png'} onClick={() => this.props.history.push('/maps')} />
    
                    </Targets>
                        <i center onClick={this.formClick} class="huge paint brush icon" onMouseOver={this.colorChange} onMouseLeave={this.normal}></i>
                        {this.state.clicked ? <> div </> : null}
             
     
                    
                </div>
                : 
                <Login history={this.props.history} loginHandler={this.props.loginHandler} />}
            </>

        //     <div>
        //     <Form>
        //     <Form.TextArea onChange={this.changeHandler}  name="description" value={this.state.description} placeholder="Describe your Gallery"/> 
        //    <Button
        //         content='Add Description'
        //         labelPosition='left'
        //         icon='paint brush'
        //         primary
        //       />
        //     </Form>
        //     </div>
    

        )
    }


}

export default withRouter(Welcome)
const frameSplash = {
    
    background: `url('/assets/regalwallpaper.jpg')`,
    height: "100vh",
    width: "100%",
   
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