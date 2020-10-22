import React from 'react'
import Gallery from '../components/Gallery.js'
import styled from 'styled-components'

class SearchContainer extends React.Component {

    state = {
        api: [],
        searchTerm: "",
        room_number: 0,
        total_rooms: 1,
    }

    renderResults = () => {
        if (this.state.api.length === 0) {
            return(
            <Center>
                <img src={'/assets/loading.gif'} alt="loading" />

            </Center>)
        } else {
            return <Gallery paintings={this.state.api.slice((this.state.room_number * 6)).slice(0, 6)} moveForward={this.moveForward} moveBackward={this.moveBackward} backward={this.state.room_number === 0} forward={this.state.total_rooms === this.state.room_number} history={this.props.history}/>
        }
    }

    moveForward = (e) => {
        if (this.state.room_number < this.state.total_rooms) {
            return this.setState(prevState => { return { room_number: prevState.room_number + 1 } })
        }

    }
    moveBackward = (e) => {

        if (this.state.room_number > 0) {
            return this.setState(prevState => { return { room_number: prevState.room_number - 1 } })
        }
    }

    componentDidMount = () => {
        let keyword = this.props.match.params.keyword
        this.setState({ searchTerm: keyword })
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3001/search/${keyword}`, {
            headers:
                { Authorization: `Bearer ${token}` }
        })

            .then(resp => {

                return resp.json()
            })
            .then(data => {
                if (data.errors) {
                    return this.setState({ api: [] })
                } else {
                    return this.setState({ api: data,
                        total_rooms: Math.ceil(data.length / 6) - 1
                    })
                }
            })
            .catch(console.log)
    }

componentDidUpdate = (prevProps, prevState) => {
    let keyword = this.props.match.params.keyword
    if (prevState.searchTerm !== keyword) {
        this.setState({ searchTerm: keyword })
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3001/search/${keyword}`, {
            headers:
                { Authorization: `Bearer ${token}` }
        })

            .then(resp => {

                return resp.json()
            })
            .then(data => {
                if (data.errors) {
                    return this.setState({ api: [] })
                } else {
                    return this.setState({ api: data })
                }
            })
            .catch(console.log)
    }}

    render(){

        return this.props.match.params.keyword ?

            <div>
                {this.renderResults()}
            </div>
            :

            <div> Not Searched</div>
    }
}

export default SearchContainer

const Center = styled.div`
     width: 100vh,
     height: 100vw,
     margin: 50px auto

`
