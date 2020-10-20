import React from 'react'
import Painting from '../components/Painting.js'
class SearchContainer extends React.Component{

    state = {
        api: [],
        searchTerm: ""
    }

    renderResults = () => {
        if (this.state.api.length === 0) {
            return <div> Loading</div>
        }else{
            return this.state.api.map((painting, idx) => <Painting key={idx} painting={painting} />)
        }
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        let keyword = this.props.match.params.keyword
        if (prevState.searchTerm !== keyword){
        this.setState({searchTerm: keyword})
        let token = localStorage.getItem("token")
        fetch(`http://localhost:3001/search/${keyword}`, {headers:
            { Authorization: `Bearer ${token}` }})
            
            .then(resp => {
                
                return resp.json()})
            .then(data => {
                if (data.errors){
                   return this.setState({api: []})
                }else{
                return this.setState({ api: data })}
            })
            .catch(console.log)
        }}
    
    render(){
    
            {return this.props.match.params.keyword ? 
                            
        <div>
            {this.renderResults()}
        </div>
            :
        
        <div> Not Searched</div>}
    }
}

export default SearchContainer