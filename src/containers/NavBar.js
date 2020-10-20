import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Input, Menu, Dropdown } from 'semantic-ui-react'


class NavBar extends React.Component {

  state = {
    activeItem: 'home',
    searchValue: "",
    redirect: null

  }

  search = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  handleItemClick = (e, { name, value }) => {

    this.setState({ activeItem: name })

  }



  dropdownChange = (e, result) => {
    if(result.value === "All Floors"){
     this.props.history.push("/maps/")
   } else if(result.value === "First Floor"){
    this.props.history.push("/maps/1")
   } else if(result.value === "Second Floor"){
    this.props.history.push("/maps/2")
   }
   }

  



  render() {
    const { activeItem } = this.state
    const floors = [
      { key: 1, text: "All Floors", value: "All Floors"}, 
      { key: 2, text: "First Floor", value: "First Floor"},  
      { key: 3, text: "Second Floor", value: "Second Floor"}
    ]
  
      return (<div>
        <Menu pointing>
        
        {localStorage.token ?
            <Menu.Item
              name='Logout'
              as={Link}
              to='/logout'
              onClick={this.props.logout}
            />
            :
            <>
              <Menu.Item
                name='Login'
                as={Link}
                to="/login"
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                name='Signup'
                as={Link}
                to="/signup"
                active={activeItem === 'Signup'}
                onClick={this.handleItemClick}
              />
            </>
          }
          <Menu.Item
            name='My Gallery'
            as={Link}
            to="/favorites"
            active={activeItem === 'My Gallery'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Dropdown name="floor" text="Museum Maps" options={floors}  onChange={this.dropdownChange}/>
          </Menu.Item>
          <Menu.Menu position='right'>
            <form onSubmit={this.props.searchHandler}>
              <Menu.Item>
                <Input onChange={this.search} name="search" value={this.state.searchValue} icon='search' placeholder='Search...' />
              </Menu.Item>
            </form>
          </Menu.Menu>
        </Menu>
      </div>
      
    )
  }
}



export default withRouter(NavBar)