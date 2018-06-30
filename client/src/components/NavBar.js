import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    
    if (user.admin) {
      return (
        <Menu.Menu position='right'>
          <Link to='/admin'>
            <Menu.Item name='Admin' />
         </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    }
    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
    )
  }
    else { 
      return (
      <Menu.Menu position='right'>
        <Link to='/login'>
          <Menu.Item name='Login' />
       </Link>
       <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
      </Menu.Menu>
      )
    }
  }

  leftNavs = () => {
    return (
      <Menu.Menu >
        <Link to='/'>
          <Menu.Item name='home' />
        </Link>
        <Link to='/about'>
            <Menu.Item name='about' />
         </Link>
         <Link to='/food/menu'>
            <Menu.Item name='menu' />
          </Link>
      </Menu.Menu>
    )
  }


  render() {
    return (
      <div>
        <Menu pointing secondary>
          { this.leftNavs() }
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));

