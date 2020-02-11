import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getPreferences } from '../actions';
import { Link } from 'react-router-dom';

class UserContainer extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
  }

  renderList() {
     console.log("user container props", this.props)
    return (this.props.profiles && this.props.profiles.map(profile => {
      return (
        <div className="card">
      <div className="image">
        <img className="ui image" src={profile.avatar} alt="Try again later!" />
      </div>
      <div className="content">
        <a className="header">{profile.name}</a>
        <div className="meta">
          <span className="date">Age {profile.age} 
        </span>
        </div>
        <div className="description">
          {profile.name} lives in {profile.city}, {profile.state}.
        </div>
      </div>
      <div className="extra content"><Link to={`/users/${profile.id}`}> 
        <button onClick={() => this.props.viewProfile(profile)}
                className="ui pink basic button">
                  View Profile!
        </button></Link>
        <div className="ui right floated">
        {profile.gender !== "Female" ? <i className="mars icon" ></i>  :  <i className="venus icon"></i> }
        </div>
      </div>
    </div>
      );
    }))
  };
  

  
    render() {
      return (
        <div>
        <br></br>
        <div className="ui container grid">
          <br></br>
          <Link to= "/filter">
          <button className="ui pink button">
          View/Set Preferences
        </button>
        </Link>
        <Link to= "/filteredprofiles">
        <button className="ui pink button">
          See who fits your preferences!
        </button>
        </Link>

        <br></br>
        <br></br>
        <br></br>

          <div className="ui link cards">
          {this.renderList()}
          </div>
        </div>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return  { profiles: state.profiles,
              selectedProfile: state.selectedProfile,
              currentUser: state.currentUser,
              preferences: state.preferences
            };
  }

  export default connect(mapStateToProps, {viewProfile, getPreferences, loggedIn})(UserContainer);
