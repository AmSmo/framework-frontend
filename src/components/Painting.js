import React from 'react'
import { Card, Icon, Image, Button, Comment, Form } from 'semantic-ui-react'

class Painting extends React.Component {

render (){
     return(
         <div>
         <Card>
    <Image alt="painting image" src={this.props.painting.results["records"][0]["images"][0]["baseimageurl"]} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Hello</Card.Header>
      <Card.Header>Joined in 2016</Card.Header>
     <Card.Meta>Style</Card.Meta>
      <Card.Description>
        Painting description
      </Card.Description>
    </Card.Content>
     </Card>
     <Comment.Group>
     <Comment>
    <Comment.Avatar as='a' src='/images/avatar/small/steve.jpg' />
    <Comment.Content>
      <Comment.Author as='a'>Steve Jobes</Comment.Author>
      <Comment.Text>Revolutionary!</Comment.Text>
      <Comment.Actions>
        <Comment.Action active>Comment</Comment.Action>
      </Comment.Actions>
      <Form reply>
        <Form.TextArea />
        <Button
          content='Add Comment'
          labelPosition='left'
          icon='edit'
          primary
          />
      </Form>
    </Comment.Content>
  </Comment>
</Comment.Group>
</div>
     )

}

}

export default Painting 