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
 
    render() {
        return (
            <>
          <div className="painting-info">
           
        <Item>
        <Frame><Item.Image alt="painting image" src={this.state.painting.image} wrapped ui={false} size="massive" centered/></Frame>
        <i onClick={this.formClick} class="paint brush icon"></i>
         <h1>{this.state.painting.title}</h1>
            <h2>{this.state.painting.artist}</h2>
            <p>{this.state.painting.dated} </p>
            <p>{this.state.painting.medium}</p>
            <p>{this.state.painting.blurb}</p>
         
           
        </Item>
          </div>

          <div className="fave-comment">
            {this.state.clicked? <FavoriteForm/> : null}
        
      </div>
           </> 
        )

    }

}

export default PaintingContainer

const Frame = styled.div`
border-image: url('https://www.pngwing.com/en/free-png-vczkq') 93 92 87 92 stretch stretch;
border-color: #f4be52;
border-style: inset;
border-width: 60px;
width: 100%;
height: 100%;
background-color: #ffe;
`


