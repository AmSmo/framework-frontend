import React from 'react';
import styled from 'styled-components'
import Login from './Login'
import { withRouter } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
class Welcome extends React.Component {

    state = {
        clicked: false,
        description: ""
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

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount = () => {
        console.log(this.props.user)
    }



    submitHandler = (e) => {
        e.preventDefault()
        let description = this.state.description
        console.log(description)
        let token = localStorage.getItem("token")
        fetch("http://localhost:3001/galleries/" + `${this.props.user.gallery.id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ description: description })
        })
            .then(resp => resp.json())
            .then(console.log)
    }

    renderDescription = () => {
        return (
            this.props.user.gallery.name
        )
    }

    render() {

        return (

            <>

                {this.props.user ?
                    <div style={frameSplash}>
                        <h2>Welcome {this.props.user.username} </h2>

                        <img onLoad={this.imageDimensions} src={this.props.user.portrait} style={{ borderRadius: "40px" }} width="250px" />
                        <Targets>
                            <Target src={'/assets/otherusers.png'} onClick={() => this.props.history.push('/galleries/others')} />
                            <Target src={'/assets/mygallery.png'} onClick={() => this.props.history.push('/favorites')} />
                            <Target src={'/assets/floorplan.png'} onClick={() => this.props.history.push('/maps')} />

                        </Targets>
                        {this.props.user.gallery.name ? <CommentFrame><h3>{this.renderDescription()}</h3></CommentFrame>
                            : <>
                                <i center onClick={this.formClick} class="huge paint brush icon" onMouseOver={this.colorChange} onMouseLeave={this.normal}></i>
                                {this.state.clicked ? <>
                                    <OurComment>
                                        <Form onSubmit={this.submitHandler} >
                                            <Form.TextArea onChange={this.changeHandler} name="description" value={this.state.title} placeholder="Gallery Description" />
                                            <Button
                                                content='Describe your Gallery '
                                                labelPosition='left'
                                                icon='paint brush'
                                                primary
                                            />
                                        </Form>
                                    </OurComment>

                                </> : null}
                            </>
                        }

                    </div>
                    :
                    <Login history={this.props.history} loginHandler={this.props.loginHandler} />}
            </>



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
const OurComment = styled.div`
     width: 450px;
     margin: 10px auto;

`

const CommentFrame = styled.div`
border-color: #f4be52;
border-style: inset;
border-width: 15px;
width: 350px;
background-color: #ffe;
margin: 0px auto;
display: block;
align-items: flex-end;
text-align: center;
`