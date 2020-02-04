import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getMyMatches } from '../actions';
import { Link } from 'react-router-dom';


class MatchesContainer extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.getMyMatches()
    }
    
   renderMatches = (profiles) => {
      let matches = this.props.matches.filter(match => match.user_id == this.props.currentUser)
    //   console.log("matches",matches)
      let matchIDs = matches.map(match => match.potential_match_id)
    //   console.log("matches IDs",matchIDs)
    //   console.log("profiles", profiles)
    //   console.log("match profiles", profiles.filter(profile => matchIDs.includes(profile.id)))
      return profiles.filter(profile => matchIDs.includes(profile.id))
   }

      renderList() {
   return (this.props.matches && this.renderMatches(this.props.profiles).map(profile => {
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
          <button 
          onClick={() => this.props.viewProfile(profile)}
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
      console.log("matches container props", this.props)
      console.log("matches profiles props", this.props.profiles)
      
    //   console.log("matches match props", this.props.matches.map(match => match.potential_match_id))
    //   console.log("potential match ids", this.props.likeProfile.map( match => match.potential_match_id))
    //   console.log("get matches", this.props.getMyMatches)
      return (
        <div>
            <div className="ui container grid">
            <div className="ui row">
            <div className="ui link cards">
            {this.props.matches == false ? "You currently have no matches." :
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
                <a><i className="arrow alternate circle left pink icon"></i></a> Browse
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
            };
  }

export default connect(mapStateToProps, {viewProfile, loggedIn, getMyMatches})(MatchesContainer);
