import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class NavBar extends React.Component {

    render() {
        return (
            <div>
            <div className="ui secondary pointing menu">
            <Link to='/'> <a className="item">
                Home
            </a></Link>
            <Link to='/myprofile'> <a className="item">
                My Profile
            </a></Link>
            <Link to='/users'><a className="item">
                Browse
            </a></Link>
            <Link to='/matches'><a className="item">
                Matches
            </a></Link>
            <Link to='/messages'><a className="item">
                Messages
            </a></Link>
            <div className="right menu">
                <a className="ui item">
                Logout
                </a>
            </div>
            </div>
            <div className="ui segment">
            <p></p>
            </div>
            </div>
        )
      }
    }
  
export default NavBar;