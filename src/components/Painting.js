import React from 'react'
import { Segment, Card, Icon, Image, Button, Comment, Form, Item } from 'semantic-ui-react'

class Painting extends React.Component {

  render() {
    return (
      <div>
        <Item>
          <Item.Image alt="painting image" src={this.props.painting.image} wrapped ui={false} size="massive" centered/>
          
            <h1>{this.props.painting.title}</h1>
            <h2>{this.props.painting.artist}</h2>
            <p>{this.props.painting.dated} </p>
            <p>{this.props.painting.medium}</p>
            <p>
              {this.props.painting.blurb}
            </p>
        </Item>
        {/* <Comment.Group>
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
        </Comment.Group> */}
      </div>
    )

  }

}

export default Painting 