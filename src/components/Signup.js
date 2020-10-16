import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    changeHandler = (e) => {
        
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        console.log(this.state)
        return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
      </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid name="username" icon='user' iconPosition='left' placeholder='Username' onChange={this.changeHandler}/>
                    <Form.Input
                        fluid
                        name="password"
                        onChange={this.changeHandler}
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Form.Input
                        fluid
                        onChange={this.changeHandler}
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
            {/* <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message> */}
        </Grid.Column>
    </Grid>
)
}
}
export default Signup