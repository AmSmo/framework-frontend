import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Signup(props){
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const changeHandler = (e) => {
        switch (e.target.name) {
            case "username":
                setUsername(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
            case "passwordConfirmation":
                setPasswordConfirmation(e.target.value)
                break;
        }
    }

    return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
      </Header>
            <Form size='large' onSubmit={props.signupHandler}>
                <Segment stacked>
                    <Form.Input fluid name="username" icon='user' iconPosition='left' placeholder='Username' onChange={changeHandler}/>
                    <Form.Input
                        fluid
                        name="password"
                        onChange={changeHandler}
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Form.Input
                        fluid
                        onChange={changeHandler}
                        name="passwordConfirmation"
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password Confirmation'
                        type='password'
                    />

                    <Button color='teal' fluid size='large'>
                        LoginFASGDFGHFDSDGHFS
          </Button>
                </Segment>
            </Form>
            <Message>
                    Already a Member? <NavLink to="/login">Login</NavLink>
            </Message>
        </Grid.Column>
    </Grid>
)
}

export default Signup