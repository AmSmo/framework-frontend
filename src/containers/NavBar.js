import React from 'react'
import { Link} from 'react-router-dom'
import { Input, Menu, Dropdown } from 'semantic-ui-react'

class NavBar extends React.Component {

  state = {
    activeItem: 'home',
    searchValue: ""

  }

  search = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  handleItemClick = (e, { name, value }) => {

    this.setState({ activeItem: name })

  }

  render() {
    const { activeItem } = this.state
    // const floors = [
    //   { key: 1, text: "First Floor", value: 1 },
    //   { key: 2, text: "Second Floor", value: 2 },
    // ]
    return (
      <div>
        <Menu pointing>
          {localStorage.token ?
            <Menu.Item
              name='Logout'
              as={Link}
              to="/login"
              active={activeItem === 'Logout'}
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
          <Menu.Item
            name='Museum Maps'
            as={Link}
            to="/maps"
            active={activeItem === 'Museum Maps'}
            onClick={this.handleItemClick}
          />
          {/* <Menu.Item>
            <Dropdown text="Jump to Floor" options={floors} simple item />
          </Menu.Item> */}
          
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