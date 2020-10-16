import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Input, Menu, Segment, Dropdown } from 'semantic-ui-react'

class NavBar extends React.Component {

     state = { 
          activeItem: 'home',
          searchValue: ""
       
     }
    
     search = (e) =>{
       this.setState({searchValue: e.target.value})
     }
     
     handleItemClick = (e, { name, value}) => {

           this.setState({ activeItem: name })
         
        }
     
       render() {
         const { activeItem } = this.state
          const floors = [
              {key: 1, text: "First Floor", value: 1},
              {key: 2, text: "Second Floor", value: 2},
              {key: 3, text: "Third Floor", value: 3},
              {key: 4, text: "Fourth Floor", value: 4},
              {key: 5, text: "Fifth Floor", value: 5},
          ]
         return (
           <div>
             <Menu pointing>
               <Menu.Item
                 name='Login'
                 as={Link}
                 to="/login"
                 active={activeItem === 'Login'}
                 onClick={this.handleItemClick}
               />
               <Menu.Item
                 name='My Gallery'
                 as={Link}
                 to="/galleries"
                 active={activeItem === 'My Gallery'}
                 onClick={this.handleItemClick}
               />
                <Menu.Item
                 name='Museum Map'
                 active={activeItem === 'Museum Map'}
                 onClick={this.handleItemClick}
               />
              <Menu.Item>
              <Dropdown text="Jump to Floor" options={floors} simple item/>
              </Menu.Item>
               <Menu.Item
                 name='Home'
                 active={activeItem === 'Home'}
                 onClick={this.handleItemClick}
               />
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