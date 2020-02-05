import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getMyMatches, deleteMatch } from '../actions';
import { Link } from 'react-router-dom';

class MatchesContainer extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getMyMatches()
  }

  //add condition to stop from infinite loop, still allowing for page refresh on delete
  componentDidUpdate() {
    // if (this.props.deleteMatch()) {
    this.props.getMyMatches() 
  //  }
  }

  renderMatches = () => {
    let matches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser)
    return matches
  }

  renderList() {
    return (this.props.matches && this.renderMatches(this.props.profiles).map(profile => { 
      console.log("profile in renderList", profile.potential_match)
      console.log("profile match id",profile.match_id)
      return (
        <div className="card">
      <div className="image">
        <img className="ui image" src={profile.potential_match.avatar} alt="Try again later!" />
      </div>
      <div className="content">
        <a className="header">{profile.potential_match.name}</a>
        <div className="meta">
          <span className="date">Age {profile.potential_match.age} 
          </span>
        </div>
        <div className="description">
          {profile.potential_match.name} lives in {profile.potential_match.city}, {profile.potential_match.state}.
        </div>
      </div>
      <div className="extra content">
          <Link to={`/users/${profile.potential_match.id}`}> 
        <button 
        onClick={() => this.props.viewProfile(profile.potential_match)}
                className="ui pink basic button">
                  View Profile!
        </button></Link>
        <div className="ui right floated">
          <button 
          onClick={() => this.props.deleteMatch(profile.match_id)}
                  className="ui pink basic button">
                      Delete Match
          </button>
        {/* {profile.gender !== "Female" ? <i className="mars icon" ></i> :  <i className="venus icon"></i> } */}
        </div> 
      </div> 
    </div>
      );
    }))
  };

  render() {
    console.log("THESE ARE MATCHES", this.props.matches)
    console.log("matches container props", this.props)
    return (
      <div>
          <div className="ui container grid">
          <div className="ui row">
          <div className="ui link cards">
          {this.props.matches === false ? "You currently have no matches." :
        this.renderList()}
          </div>
          <br></br>
          <br></br>
          </div>
          </div>
          <br></br>
          <br></br>
      <Link to={`/users`}>
          <button className="ui basic pink button left floated">
              <i className="arrow alternate circle left pink icon"></i> Browse
          </button>
        </Link>
        <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    console.log("matches state", state)
    return  { profiles: state.profiles,
              selectedProfile: state.selectedProfile,
              likeProfile: state.likeProfile,
              currentUser: state.currentUser,
              matches: state.matches,
              deleteMatch: state.deleteMatch
            };
  }

export default connect(mapStateToProps, {viewProfile, loggedIn, getMyMatches, deleteMatch})(MatchesContainer);
