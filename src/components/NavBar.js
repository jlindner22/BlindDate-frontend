import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <React.Fragment>  
                {this.props.currentUser == null ? null :
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
            <Link to='/filters'><a className="item">
                Preferences
            </a></Link>
            {/* <Link to='/messages'><a className="item">
                Messages
            </a></Link> */}
            <div className="right menu" onClick={this.props.logout}>
            <Link to='/'>  
            <a className="ui item">
                Logout
                </a>
                </Link>
            </div>
            </div> 
            <div className="ui segment">
            <p></p>
            </div> 
            </div>
                }
            </React.Fragment>  
        )
    }
}
  
export default NavBar;