import React from 'react';
import { connect } from 'react-redux';
import { likeProfile } from '../actions';


class UserDetail extends React.Component {
//     if (!selectedProfile) {
// // console.log("new props", props)
//     return <div> Select a profile </div> 
//     } return <div> {selectedProfile.name} </div>
// }

renderList() {
    return this.props.selectedProfile.map(profile => {
      return (
        <div class="card">
      <div className="image">
        <img src={profile.avatar} alt="Try again later!" />
      </div>
      <div className="content">
        <a className="header">{profile.name}</a>
        <div className="meta">
          <span className="date">Age {profile.age} {profile.gender}
    </span>
        </div>
        <div className="description">
          {profile.name} lives in {profile.city}, {profile.state}. They went to {profile.college}
        </div>
      </div>
      <div className="extra content">
        <button onClick={() => this.props.likeProfile(profile)}
                className="ui button primary">
                  Match with {profile.name}!
        </button>
        {profile.gender !== "Female" ? <a><i className="mars icon" ></i> </a> :  <i className="venus icon"></i> }
      </div>
    </div>
      );
    });
  };

  render() {
    console.log("props 2", this.props)
    return (
      <div>
         Profiles
      <div className="ui link cards">
        {this.renderList()}
      </div>
      </div>
    )
  }
}




const mapStateToProps = state => {
  return { likeProfile: state.likeProfile }
}

export default connect(mapStateToProps)(UserDetail);