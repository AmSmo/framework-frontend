
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Form, Grid, Icon, Header, Image, Message, Segment } from 'semantic-ui-react'

function Login(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    const changeHandler = (e) => {
        switch (e.target.name) {
            case "username":
                setUsername(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                
                break;
 
        }
    }
    let result = <></>
    if (!localStorage.getItem("token")){
        result = 
        <div style= {frameSplash}>
            <p style={head}>Welcome to Framework</p>
            <img className="framesplash" src={'/assets/splash2.png'} style={imgStyle} />
        
        <Grid textAlign='center' style={{ marginTop: '22vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
                <Icon name="small paint brush icon" /> Log-in to your account
      </Header>
            <Form size='large' onSubmit={props.loginHandler}>
                <Segment stacked>
                            <Form.Input fluid icon='user' onChange={changeHandler} value={username} name="username" iconPosition='left' placeholder='Username' />
                    <Form.Input
                        fluid
                        icon='lock'
                        name="password"
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                         onChange={changeHandler} 
                         value={password}
                    />

                    <Button color='blue' fluid size='large'>
                        Login
          </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <NavLink to="/signup">Sign Up</NavLink>
            </Message>
        </Grid.Column>
    </Grid>
        </div>

    
}
return(result)}
export default Login


const imgStyle = {
    // height: "600px",
    left: "50%",
    marginTop: "-31vh",
    marginLeft: "-600px",
    position: "absolute",
    top: "50%",
    width: "1200px",



}
const head = {
    fontSize: "4em",


}
const frameSplash = {
    background: "rgba(10, 138, 10, 0.450)",
    height: "100vh",
    width: "100%",
    // background: "red",
    display: "inline-table"

}