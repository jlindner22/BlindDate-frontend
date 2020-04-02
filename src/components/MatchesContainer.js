import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getMyMatches, deleteMatch } from '../actions';
import { Link } from 'react-router-dom';
import PersonalityMatches from './PersonalityMatches';

class MatchesContainer extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getMyMatches()
  }

  state = {
      oldMatchesLength: this.props.matches.length,
      heart: false
    }

  // //add condition to stop from infinite loop, still allowing for page refresh on delete
  componentDidUpdate() {
  //  if (this.state.oldMatchesLength !== this.props.matches.length){
    this.props.getMyMatches()
    // this.setState({oldMatchesLength: this.props.matches.length}) 
    // } else { return null }
    // console.log("LOOK HERE", this.props)
  }

  heartClicked = () => {
    this.setState({
      heart: true
    })
  }

  renderMatches = () => {
    if (this.props.matches) {
    let matches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)
    return matches } else {return "Log in to view your matches"}
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
          <Link to={`/users/${profile.potential_match.id}`}> <button 
            onClick={() => this.props.viewProfile(profile.potential_match)}
                className="ui blue basic button">
                  View Profile!
          </button></Link>
        <div className="ui right floated">
          <button 
          onClick={() => this.props.deleteMatch(profile.match_id)}
                  className="ui blue basic button">
                      Delete Match
          </button>
        </div> 
      </div> 
    </div>
      );
    }))
  };

  render() {
  console.log("MATCHES", this.props.matches)
    if (this.props.matches){
    let myMatches = this.props.matches.filter(match => match.user_id.id === this.props.currentUser.id)
    return (
      <div>
        <div className="ui container grid">
          <div className="ui row">
            <Link to={`/users`}>
          <button className="ui basic blue button left floated">
              <i className="arrow alternate circle left blue icon"></i> Keep browsing
          </button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
            <div className="ui link cards">
          {myMatches < 1 ? 
            <div>
            {this.state.heart === true ? <PersonalityMatches/> :
          <div className="greenText">
           <br></br><br></br> <br></br>  
          <h1>
           You currently have no matches.</h1> 
           <h4>In the meantime, click on the heart to view some 
           <br></br>
            profiles that best match your personality type.</h4>
           <br></br>
           <br></br>
           <br></br>
           <img className="ui medium centered image" onClick={this.heartClicked} src="https://static.thenounproject.com/png/720337-200.png" alt="heart"></img>
           <br></br>
            <br></br> 
            </div> }
           </div> 
           :
        this.renderList() }
          </div>
          <br></br>
          <br></br>
          </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br>
      </div>
    )
    } else {return "Log in to view your matches"}
  }
}

const mapStateToProps = state => {
  return { profiles: state.profiles,
            selectedProfile: state.selectedProfile,
            likeProfile: state.likeProfile,
            currentUser: state.currentUser,
            matches: state.matches,
            deleteMatch: state.deleteMatch };
}

export default connect(mapStateToProps, {viewProfile, loggedIn, getMyMatches, deleteMatch})(MatchesContainer);
