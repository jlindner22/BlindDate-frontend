import React from 'react';
import { connect } from 'react-redux';
import { matchProfile, viewProfile, loggedIn } from '../actions';
import { Link } from 'react-router-dom';


class MatchesContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

      renderList() {
   return (this.props.likeProfile && this.props.likeProfile.map(profile => {
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
        <div className="extra content">
            <Link to={`/users/${profile.id}`}> 
          <button onClick={() => this.props.viewProfile(profile)}
                  className="ui pink basic button">
                    View Profile!
          </button></Link>
          <div className="ui right floated">
          {profile.gender !== "Female" ? <a><i className="mars icon" ></i> </a> :  <i className="venus icon"></i> }
          </div>
        </div>
      </div>
        );
      }))
    };

    render() {
      console.log("propsss", this.props)
      return (
        <div>
            <div className="ui container grid">
            <div className="ui row">
            <div className="ui link cards">
            {this.props.likeProfile == false ? "You currently have no matches." :
          this.renderList()}
            </div>
            <br></br>
            <br></br>
            </div>
            </div>
        <Link to={`/users`}>
            <button className="ui basic pink button left floated">
                    Go Back to Browser
          </button>
          </Link>
        </div>

      )
    }
  }

  const mapStateToProps = state => {
    // console.log("state", state)
    return  { profiles: state.profiles,
              selectedProfile: state.selectedProfile,
              likeProfile: state.likeProfile,
              currentUser: state.currentUser
            };
  }

// export default MatchesContainer;
export default connect(mapStateToProps, {viewProfile, matchProfile, loggedIn})(MatchesContainer);