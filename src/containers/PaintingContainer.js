import React from 'react'

class PaintingContainer extends React.Component {


    componentDidMount = () => {
        let token = localStorage.getItem("token")
        const paintingId = (this.props.match.params.paintingId)
        console.log(paintingId)
        fetch(`http://localhost:3001/paintings/${paintingId}`, {
        method: "GET", 
        headers: 
            { Authorization: `Bearer ${token}`}})
        .then(resp => resp.json())
        .then(console.log)
    }
    render() {
        return (
            
            <div>
                {/* <Item>
                    <Item.Image alt="painting image" src={this.props.painting.image} wrapped ui={false} size="massive" centered />

                    <h1>{this.props.painting.title}</h1>
                    <h2>{this.props.painting.artist}</h2>
                    <Card.Meta>{this.props.painting.dated} </Card.Meta>
                    <Card.Meta>{this.props.painting.medium}</Card.Meta>
                    <p>
                        {this.props.painting.blurb}
                    </p>

                </Item> */}
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

export default PaintingContainer