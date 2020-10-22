import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


function GalCard(props){
    const sendToGallery= () =>{
        
        return props.history.push(`/gallery/${props.userGallery.user.id}`)
        
    }
    
    return(
    <Card style={{ borderRadius: "10px", width: "230px", margin: "20px"}} onClick={() => sendToGallery()}>
        <Image src={`/${props.userGallery.user.portrait}`} style={{margin: "15px", borderRadius: "15px", height: "280px"}} />
        <Card.Content>
            <Card.Header>{props.userGallery.user.username}</Card.Header>
            
            <Card.Description>
                {props.userGallery.name}
      </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name="small paint brush icon" />
        {(props.userGallery.paintings_with_comments.length)} Paintings
      </a>
        </Card.Content>
    </Card>)
}

export default withRouter(GalCard)