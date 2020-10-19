import React from 'react';
import { Segment, Card, Icon, Image, Button, Comment, Form, Item } from 'semantic-ui-react';
import styled from 'styled-components'


class FavoriteForm extends React.Component {
     
     state = {
          comment : ""
     }

     changeHandler = (e) => {
          this.setState({[e.target.name]: e.target.value})
     }

     submitHandler= (e) => {
          e.preventDefault()
          this.props.submitHandler(this.state)
          
     }
     render(){
     return(
         
 <Comment.Group>
          <Comment>
               <Form onSubmit={this.submitHandler} >
               <ComStyle> <Form.TextArea onChange={this.changeHandler}  name="comment" value={this.state.comment} placeholder="Comments on the Artwork"/> </ComStyle>
                <Button
                  content='Add Comment'
                  labelPosition='left'
                  icon='edit'
                  primary
                />
              </Form>
          </Comment>
        </Comment.Group> 
       
     )
     }
 
}

export default FavoriteForm


const ComStyle = styled.div`
text-align: center

`