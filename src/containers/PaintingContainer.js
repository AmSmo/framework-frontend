import React from 'react'
import { Item, Comment, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import FavoriteForm from '../components/FavoriteForm'

class PaintingContainer extends React.Component {

state = {
  painting : [],
  clicked: false,
  comment: "",
  portrait: "",
  username: ""
  }



    componentDidMount = () => {
        let token = localStorage.getItem("token")
        const paintingId = (this.props.match.params.paintingId)
        
        fetch(`http://localhost:3001/paintings/${paintingId}`, {
        method: "GET", 
        headers: 
            { Authorization: `Bearer ${token}`}})
        .then(resp => resp.json())
        .then(painting => {
          console.log(painting)
          this.setState({ painting : painting})
        })
    }

    formClick = () => {
      this.setState((prevState) => ({clicked: !prevState.clicked}))
    }

    submitHandler = (e) => {
      e.preventDefault()
      let comment = e.target.comment.value 
      let token = localStorage.getItem("token")
      fetch("http://localhost:3001/users/favorites", {
        method: "POST",
        headers: {Authorization: `Bearer ${token}`,
        "Accepts": "application/json",
        "Content-type": "application/json"},
        body: JSON.stringify({ painting : this.state.painting, comment})})
        .then(resp => resp.json())
        .then(data => {
          console.log(data.user.portrait)
          this.setState({
            comment : data.comment.comment,
            portrait : data.user.portrait,
            username : data.user.username
          })
        })
      }
      
        
        
          
      
    renderComment = () => {
      if(this.state.comment.length > 0)
      return (
        this.state.comment
      )
    }

    renderImage = () => {
      return (
        this.state.portait
      )
    }

    renderUsername = () => {
      return (
        this.state.username
      )
    }
      
      
   
      
goBack = () => {
  this.props.history.goBack()
}

      
colorChange = (e) => {
  e.target.style.color = "gold"
}

normal = (e) => {
  e.target.style.color = "black"
}
      
    
 
  render() {
        return (
           
            <Background>
        <Item>
       <img style={frameStyle} alt="painting image" src={this.state.painting.image}   size="huge" centered/>
    
        <i onClick={this.formClick} class="huge paint brush icon" onMouseOver={this.colorChange} onMouseLeave={this.normal} centered></i>
         <h1>{this.state.painting.title}</h1>
            <h2>{this.state.painting.artist}</h2>
            <p>{this.state.painting.dated} </p>
            <p>{this.state.painting.style}</p>
           <Frame> {this.state.painting.blurb}</Frame>
       </Item>
          <>
      <Comment.Group>
      <Comment>
      <Comment.Avatar alt="" src={this.renderImage()} />
      <Comment.Content>
        <Comment.Author as='Username'> </Comment.Author>
        <Comment.Text>{this.renderComment()}</Comment.Text>      
      </Comment.Content>  
      </Comment>
      </Comment.Group>
      </>
      
      <p> {this.renderUsername()}</p>

    
       <>
       <div className="fave-comment">
        {this.state.clicked? <FavoriteForm submitHandler={this.submitHandler}/> : null}
        </div>
      </>

         <Button inverted color='red' onClick={this.goBack}>
           Back to Gallery
         </Button>
      </Background>
    
        )

    }

  }

export default PaintingContainer

const Frame = styled.div`
border-color: #f4be52;
border-style: inset;
border-width: 30px;
width: 450px;
background-color: #ffe;
margin: 0px auto;
`



const Background = styled.div`
background-color: #0A8A8A 
`


const frameStyle = {
  display: "inline-block",
  margin: "20px, auto",
  "height": "400px",
  border: "10px solid transparent",
  padding: "40px",
   border_image_source: "url('/assets/splash2.png')",
  // backgroundImage: "url('/assets/splash2.png')"
  // "-moz-border-image": "url('/assets/splash2.png')"
  // "-webkit-border-image": "url('/assets/splash2.png')"
  // "-o-border-image": "url('/assets/splash2.png')",
  // "border-image": "url('/assets/splash2.png')",
}
