import React from 'react'
import { Segment, Card, Icon, Image, Button, Comment, Form, Item } from 'semantic-ui-react'


function FavoriteForm (props) {
     
     // state = {
     //      comment : ""
     // }

     // changeHandler = (e) => {
     //      this.setState({[e.target.name]: e.target.value})
     // }

     // submitHandler= (e) => {
     //      e.preventDefault()
     // }

     return(
 <Comment.Group>
          <Comment>
               <Form >
                <Form.TextArea  placeholder="Comments on the Artwork"/>
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

export default FavoriteForm