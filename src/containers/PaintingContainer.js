import React from 'react'
import { Comment, Button, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import FavoriteForm from '../components/FavoriteForm'

class PaintingContainer extends React.Component {

  state = {
    painting: [],
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
        { Authorization: `Bearer ${token}` }
    })
      .then(resp => resp.json())
      .then(painting => {
        console.log(painting)
        if (painting.comment !== "") {
          this.setState({ painting: painting, comment: painting.comment, portrait: painting.user.portrait, username: painting.user.username })
        } else {
          this.setState({ painting: painting })
        }
      })
  }

  formClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    let comment = e.target.comment.value
    let token = localStorage.getItem("token")
    fetch("http://localhost:3001/users/favorites", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Accepts": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({ painting: this.state.painting, comment })
    })
      .then(resp => resp.json())
      .then(data => {

        this.setState({
          comment: data.comment.comment,
          portrait: data.user.portrait,
          username: data.user.username
        })
      })
  }





  renderComment = () => {
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
      <>

        <Background>

          <Back> <Button color='orange' onClick={this.goBack}> Back to Gallery</Button></Back>



          
            <FrameTwo>
              {this.state.painting.length === 0 ?
                <Image alt="painting image" src={'/assets/loading.gif'} size="large" centered />
                :
                <Image alt="painting image" src={this.state.painting.image} size="large" centered />
              }
            </FrameTwo>

            <i center onClick={this.formClick} class="huge paint brush icon" onMouseOver={this.colorChange} onMouseLeave={this.normal}></i>
            {this.state.clicked && this.state.comment.length < 1 ? <FavoriteForm submitHandler={this.submitHandler} /> : null}
            <>
              <MyComment>
                <Comment>
                  {this.state.username !== "" ?
                    <CommentFrame>
                      <Comment.Avatar onLoad={this.imageDimensions} src={`/${this.state.portrait}`} style={{ borderRadius: "20px" }} width="75px" />
                      <Comment.Content>
                        <Comment.Author style={{ fontWeight: "bold" }}>{this.state.username !== "" ? this.renderUsername() : null}</Comment.Author>
                        <Comment.Text>{this.state.comment !== "" ? this.renderComment() : null}</Comment.Text>
                      </Comment.Content>
                    </CommentFrame>

                    :
                    null}
                </Comment>
              </MyComment>




              <h1 style={{
                color: "gold", fontSize: "40px", webkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "black", width: '550px', margin: "0 auto"
              }}>{this.state.painting.title}</h1>
              <h2 style={{
                color: "gold", fontSize: "30px", webkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black", margin: "0 auto"
              }}>{this.state.painting.artist}</h2>
            <p style={{ color: "gold", FontSize: "20px", margin: "0 auto" }}>{this.state.painting.dated} , {this.state.painting.style}</p>
              <Frame> {this.state.painting.blurb}</Frame>



            </>
            
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
width: 750px;
background-color: #ffe;
margin: 0px auto
`

const CommentFrame = styled.div`
border-color: #f4be52;
border-style: inset;
border-width: 15px;
width: 350px;
background-color: #ffe;
margin: 0px auto;
display: inline-flex;
align-items: flex-end;
`


const FrameTwo = styled.div`
border-color: 0D0A8A;
border-style: inset;
border-width: 30px;
width: 450px;
background-color: 0D0A8A;
margin: 0px auto
`


const MyComment = styled.div`
width: 450px;
text-align: left;
margin: 10px auto;
text-align: left
`

const Back = styled.div`
text-align: right
`


const Background = styled.div`
// background-image: url("/assets/BlueWallpaper.png");
background-image: url("/assets/RegalRed.jpg");
height: 100vh;
width: 100vw;
display: inline-table
`


// const frameStyle = {
//   display: "inline-block",
//   margin: "20px, auto",
//   height: "400px",
//   border: "10px solid transparent",
//   padding: "40px",
//    border_image_source: "url('/assets/splash2.png')",
//   // backgroundImage: "url('/assets/splash2.png')"
//   // "-moz-border-image": "url('/assets/splash2.png')"
//   // "-webkit-border-image": "url('/assets/splash2.png')"
//   // "-o-border-image": "url('/assets/splash2.png')",
//   // "border-image": "url('/assets/splash2.png')",
// }
