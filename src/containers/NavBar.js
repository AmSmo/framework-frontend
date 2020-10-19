import React from 'react';
import { Link, Route} from 'react-router-dom';
import { Input, Menu, Dropdown } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = {
    activeItem: 'home',
    searchValue: "",
    dropDown: ""
  }

  search = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  handleItemClick = (e, { name, value }) => {

    this.setState({ activeItem: name })

  }

  // renderDropdown = () => { 
  //   if(this.state.dropdown === "All Floors") {
  //     this.history.push("/maps")
  //   }
  //   console.log(this.state.dropdown)
  // }
  // dropdownChange = (e, {name, value}) => {
  //   this.setState({activeItem : name})
  // }
  

  render() {
    const { activeItem } = this.state
    const floors = [
      {key: "All Floors", text: "All Floors", value: "All Floors"}, 
      {key: "First Floor", text: "First Floor", value: "First Floor"},  
      {key: "Second Floor", text: "Second Floor", value: "Second Floor"}]
      return (<div>
        <Menu pointing>
            <Menu.Item
              name='Logout'
              as={Link}
              to="/logout"
              active={activeItem==='Logout'}
              onClick={this.props.logout}
            />
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
          <Menu.Item
            name='My Gallery'
            as={Link}
            to="/favorites"
            active={activeItem === 'My Gallery'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <Dropdown name="Museum Maps" text="Museum Maps" options={floors} onChange={this.dropdownChange}  as={Link} to="/maps" />
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



export default NavBar