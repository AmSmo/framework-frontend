import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends React.Component{
    changeHandler = (e) => {
        console.log(e.target.name)
        this.setState({ [e.target.name]: e.target.value })
    }
    render(){
        return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
      </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
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

)}}
export default Login