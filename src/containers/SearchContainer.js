import React from 'react'

class SearchContainer extends React.Component{

    state = {
        api: []
    }

    // componentDidMount() {
    //     fetch("http://localhost:3001/search/1200")
    //         .then(resp => resp.json())
    //         .then(paintings => {
    //             console.log(paintings)
    //             this.setState({ api: paintings })
    //         })
    //         .catch(console.log)

    // }
    render(){
        console.log(this.props.history.params)
        return(
        <div>
            I'm a search!!!
        </div>
    )}
}

export default SearchContainer