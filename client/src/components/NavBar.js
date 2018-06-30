import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
           <Link to='/Admin'>
            <Menu.Item name='Admin login' />
          </Link>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu >
        <Link to='/about'>
          <Menu.Item name='About' position="left" />
        </Link>
        <Link to='/menu'>
          <Menu.Item name='Menu' />
        </Link>
        <Link to='/register' position='right'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Admin Login' />
        </Link>

         <Link to='/about'>
            <Menu.Item name='about' />
          </Link>
          <Link to='/food/menu'>
            <Menu.Item name='menu' />
          </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
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

