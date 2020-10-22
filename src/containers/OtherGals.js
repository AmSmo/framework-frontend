import React from 'react'
import styled from 'styled-components'
import GalCard from '../components/GalCard.js'

class OtherGals extends React.Component {

    state = {
        galleries: []
    }

    componentDidMount = () => {
        let token = localStorage.getItem("token")
        fetch("http://localhost:3001/other_users", {
            method: "GET",
            headers:
                { Authorization: `Bearer ${token}` }
        })
            .then(resp => resp.json())
            .then(data => {
            this.setState({galleries: data})})
            .catch(console.log)
            }
    

            cardMe = () => {
                return this.state.galleries.map(gall => <GalCard userGallery={gall} />)
            }

render() {
    return (

        <Background>
            <h1> The Framework Community</h1>
            {this.state.galleries.length === 0 ?
                <Center>
                    <img src={'/assets/loading.gif'} alt="loading" />

                </Center>
        
        :
        <CardContainer>
                    {this.cardMe()}
        </CardContainer>
        
        }
        </Background>
    )

}
}


export default OtherGals

const Center = styled.div`
     width: 100vh;
     height: 100vw;
     margin: 50px auto;

`

const Background = styled.div`
    background: url('/assets/regalwallpaper.jpg');
    height: 100vh;
    width: 100%;
    display: inline-table;
    opacity: .9;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`


