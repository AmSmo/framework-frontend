import React from 'react'
import { Segment, Card, Icon, Image, Button, Comment, Form, Item } from 'semantic-ui-react'
import styled from 'styled-components'
import FavoriteForm from '../components/FavoriteForm'

class PaintingContainer extends React.Component {

state = {
  painting : [],
  clicked: false
}


    componentDidMount = () => {
        let token = localStorage.getItem("token")
        const paintingId = (this.props.match.params.paintingId)
        console.log(paintingId)
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
      console.log("clicked")
      this.setState((prevState) => ({clicked: !prevState.clicked}))
    }

    // submitHandler = (painting, e) => {
    //   let comment = e.target.comment.value 
    //   let token = localStorage.getItem("token")
    //   fetch("http://localhost:3001", {
    //     method: "POST",
    //     headers: { Authorization: `Bearer ${token}`},
    //     body: JSON.stringify({ painting : this.state.painting}, {comment : comment})
    //     .then(resp => resp.json())
    //   })
      
      
      
colorChange = (e) => {
  e.target.style.color = "gold"
}

normal = (e) => {
  e.target.style.color = "black"
}
      
    
 
    render() {
        return (
            <>
            <Background>
          <div className="painting-info">
           
        <Item>
        <Frame><Item.Image alt="painting image" src={this.state.painting.image} wrapped ui={false} size="massive" centered/></Frame>
        <i onClick={this.formClick} class="huge paint brush icon" onMouseOver={this.colorChange} onMouseLeave={this.normal}></i>
         <h1>{this.state.painting.title}</h1>
            <h2>{this.state.painting.artist}</h2>
            <p>{this.state.painting.dated} </p>
            <p>{this.state.painting.medium}</p>
           <Frame> <p>{this.state.painting.blurb}</p></Frame>
         
           
        </Item>
          </div>

          <div className="fave-comment">
            {this.state.clicked? <FavoriteForm submitHandler={this.submitHandler}/> : null}
        
      </div>
      </Background>
           </> 
        )

    }

}

export default PaintingContainer

const Frame = styled.div`
border-color: #f4be52;
border-style: inset;
border-width: 60px;
width: 100%;
height: 100%;
background-color: #ffe;
`

const Background = styled.div`
background-color: #640D14
`
