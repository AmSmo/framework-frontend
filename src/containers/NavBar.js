import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Input, Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {

     state = { 
          activeItem: 'home',
          searchValue: ""
       
     }
    
     search = (e) =>{
       this.setState({searchValue: e.target.value})
     }
     
     handleItemClick = (e, { name, value}) => 
           this.setState({ activeItem: name })
         
        }
     
       render() {
         const { activeItem } = this.state
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