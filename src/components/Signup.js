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
    const invalidPassword = (password !== passwordConfirmation && password !== "" && passwordConfirmation !== "")

    const pwValidation = (e)=>{
        if (invalidPassword){
            alert("Passwords Do Not Match")
        }else if (username === ""){
            alert("Must have a username")
        }else{
            return props.signupHandler(e)
        }
    }
    let result = <></>
    if (!localStorage.getItem("token")) {
    result = <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Sign Up! 
      </Header>
            <Form size='large' onSubmit={pwValidation}>
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
                        {invalidPassword ? <Message size="tiny" color='red'>Passwords do not match</Message> : null} 

                    <Button color='teal' fluid size='large'>
                       Start Your Art Journey
          </Button>
                </Segment>
            </Form>
            <Message>
                    Already a Member? <NavLink to="/login">Login</NavLink>
            </Message>
        </Grid.Column>
    </Grid> 

    }else{
       props.history.push("/maps")
}
    return (result)
}

export default Signup