import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    logOut = () => {
        this.props.logout();
    }

    render() {
        return (
            <React.Fragment>  
                {this.props.currentUser == null ? null :
            <div className="ui teal inverted secondary pointing menu">
            <img className="ui mini image" src="https://lh4.googleusercontent.com/proxy/Mao6aPRTCA83ZBktGFcx7Auw91UbX4X_LY69tI4dlwYalmIVEXkf9tWN_qiQO5dTBdDequSk2BoZEKvH_zpQ_0li_Z15KEpffWUrEGgOvqfko_M0Oj817XMDQ38D" alt="sorry"></img>
            <Link to='/'> <a className="item"><i className="home icon"></i>
                Home
            </a></Link>
            <Link to='/myprofile'> <a className="item"><i className="user circle icon"></i>
                My Profile
            </a></Link>
            <Link to='/users'><a className="item"><i className="users icon"></i>
                Browse
            </a></Link>
            <Link to='/matches'><a className="item"><i className="red fire icon"></i>
                Matches
            </a></Link>
            <Link to='/filters'><a className="item"><i className="search icon"></i>
                Preferences
            </a></Link>
            {/* <Link to='/messages'><a className="item">
                Messages
            </a></Link> */}
            <div className="right menu" >
            {/* <div className="ui simple dropdown item">  
                Account Options              
            <i className="dropdown icon" ></i> 
            <div className="menu"> */}
            <Link to='/editprofile'>
            <a className="item"><i className="pencil icon"></i>Edit Account</a>
            </Link>
            <Link to='/'>
            <a className="item" onClick={this.logOut}><i className="sign-out icon"></i>Logout</a>
            </Link>
            </div>
            </div>
                }
            </React.Fragment>  
        )
    }
}

/* <div class="ui dropdown item">
More
<i class="dropdown icon"></i>
<div class="menu">
  <a class="item"><i class="edit icon"></i> Edit Profile</a>
  <a class="item"><i class="globe icon"></i> Choose Language</a>
  <a class="item"><i class="settings icon"></i> Account Settings</a>
</div>
</div> */


export default NavBar;