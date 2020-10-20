import React from 'react'
import { Item } from 'semantic-ui-react'
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
        .then(console.log)
        .catch(console.log)
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
            <Background>
          <div className="painting-info">
           
        <Item>
        <Frame><Item.Image alt="painting image" src={this.state.painting.image} wrapped ui={false} size="huge" centered/></Frame>
        <i onClick={this.formClick} class="huge paint brush icon" onMouseOver={this.colorChange} onMouseLeave={this.normal}></i>
         <h1>{this.state.painting.title}</h1>
            <h2>{this.state.painting.artist}</h2>
            <p>{this.state.painting.dated} </p>
            <p>{this.state.painting.style}</p>
           <Frame> {this.state.painting.blurb}</Frame>
         
           
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
border-width: 30px;
width: 450px;
background-color: #ffe;
margin: 0px auto;
`

const Background = styled.div`
background-color: #640D14
`
