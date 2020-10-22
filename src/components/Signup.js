import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { Button, Radio, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
function Signup(props){
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [avatar, setAvatar] = useState('')
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
            case "avatar":
                setAvatar(e.target.value)
                break;
            default:
                break;
        }
        
    }
    const radioHandler = (e, result) => {
        setAvatar(result.value)
    }
    const invalidPassword = (password !== passwordConfirmation && password !== "" && passwordConfirmation !== "")

    const pwValidation = (e)=>{
        if (invalidPassword){
            alert("Passwords Do Not Match")
        }else if (username === ""){
            alert("Must have a username")
        }else if (avatar === ""){
            alert("Must have an avatar")
        }
        
        else{
            return props.signupHandler(e, avatar)
        }
    }
    let result = <></>
    if (!localStorage.getItem("token")) {
    result = 
    <div style={frameSplash}>
        
        <div style={head}>Welcome to Framework</div>
        <img  src={'/assets/splash2.png'} style={imgStyle} alt="Gold Frame" />
    <Grid textAlign='center' style={{ marginTop: '13vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                    <Icon name="small paint brush icon" /> Sign Up! 
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
    <Avatars>
        <Choose>
        <Avatar src={'assets/avatars/escher.jpg'}/>
            <Radio
                label='Escher'
                name='avatar'
                value='assets/avatars/escher.jpg'
                    checked={avatar ==='assets/avatars/escher.jpg'}
                onChange={radioHandler}
                style= {{fontSize:"18px", marginTop: "15px"}}
            />
            </Choose>
            <Choose>
        <Avatar src={'assets/avatars/frida.jpg'}/>
                <Radio
                    label='Frida Kahlo'
                    name='avatar'
                    value='assets/avatars/frida.jpg'
                    checked={avatar === 'assets/avatars/frida.jpg'}
                    onChange={radioHandler}
                    style={{ fontSize: "18px", marginTop: "15px" }}
                />
            </Choose>
            <Choose>
        <Avatar src={'assets/avatars/monalisa.jpg'}/>
               <Radio
                    label='Mona Lisa'
                    name='avatar'
                    value='assets/avatars/monalisa.jpg'
                    checked={avatar === 'assets/avatars/monalisa.jpg'}
                    onChange={radioHandler}
                    style={{ fontSize: "18px", marginTop: "15px" }}
                />
            </Choose>
            <Choose>
        <Avatar src={'assets/avatars/pearlearing.jpg'}/>
                <Radio
                    label='Pearl Earing'
                    name='avatar'
                    value='assets/avatars/pearlearing.jpg'
                    checked={avatar==='assets/avatars/pearlearing.jpg'}
                
                onChange={radioHandler}
                    style={{ fontSize: "18px", marginTop: "15px" }}
                />
            </Choose>
            <Choose>
        <Avatar src={'assets/avatars/picasso.jpg'}/>
                <Radio
                    label='Picasso'
                    name='avatar'
                    value='assets/avatars/picasso.jpg'
                    checked={avatar ==='assets/avatars/picasso.jpg'}
                
                onChange={radioHandler}
                    style={{ fontSize: "18px", marginTop: "15px" }}
                />
            </Choose>
            <Choose>
        <Avatar src={'assets/avatars/vangogh.jpeg'}/>
                <Radio
                    label='Van Gogh'
                    name='avatar'
                    value='assets/avatars/vangogh.jpeg'
                    checked={avatar ==='assets/avatars/vangogh.jpeg'}
                
                onChange={radioHandler}
                    style={{ fontSize: "18px", marginTop: "15px" }}
                />
            </Choose>
    </Avatars>
        <span style={{fontSize: "3em"}}>Choose Your Avatar</span>
    </div>
    }else{
       props.history.push("/maps")
}
    return (
        result)
}

export default Signup


const imgStyle = {
    // height: "600px",
    left: "50%",
    marginTop: "-39vh",
    marginLeft: "-600px",
    position: "absolute",
    top: "50vh",
    width: "1200px",



}

const frameSplash={
background: "rgba(10, 138, 10, 0.450)",
height: "100vh",
width: "100%",
// background: "red",
display: "inline-table"

}
const Choose = styled.div`
    
`
const Avatars = styled.div`
    margin: 170px auto;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 70%;
    flex-wrap: wrap;
    align-content: stretch;
`

const Avatar = styled.img`
    display:block;
    width: 160px;
    height: 220px;
    z-index: 10;
    position: relative;
`
const head = {
    marginTop: "40px",
    fontSize: "5em",


}