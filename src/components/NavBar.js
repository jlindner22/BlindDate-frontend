import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../assets/home_logo.jpg';


class NavBar extends React.Component {

    logOut = () => {
        this.props.logout();
    }

    render() {
        return (
            <React.Fragment>  
                {this.props.currentUser == null ? null :
            <div className="ui teal inverted secondary pointing menu">
            <img className="ui mini image" src={homeLogo} alt="logo"></img>
            <Link to='/'> <div className="item biggerProfileFont menuHover"><i className="home icon"></i>
                Home
            </div></Link>
            <Link to='/myprofile'> <div className="item biggerProfileFont menuHover"><i className="user circle icon"></i>
                My Profile
            </div></Link>
            <Link to='/users'><div className="item biggerProfileFont menuHover"><i className="users icon"></i>
                Browse
            </div></Link>
            <Link to='/matches'><div className="item biggerProfileFont menuHover"><i className="fire icon"></i>
                Matches
            </div></Link>
            <Link to='/filters'><div className="item biggerProfileFont menuHover"><i className="search icon"></i>
                Preferences
            </div></Link>
            {/* <Link to='/messages'><div className="item">
                Messages
            </div></Link> */}
            <div className="right menu">
            {/* <div className="ui simple dropdown item">  
                Account Options              
            <i className="dropdown icon" ></i> 
            <div className="menu"> */}
            <Link to='/editprofile'>
            <div className="item biggerProfileFont menuHover"><i className="pencil icon"></i>Edit Account</div>
            </Link>
            <Link to='/'>
            <div className="item biggerProfileFont menuHover" onClick={this.logOut}><i className="sign-out icon"></i>Logout</div>
            </Link>
            </div>
            </div>
                }
            </React.Fragment>  
        )
    }
}

export default NavBar;