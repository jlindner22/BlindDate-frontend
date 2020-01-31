import React from 'react';
import { connect } from 'react-redux';
import { likeProfile } from '../actions';
// import { viewProfile } from '../actions';


class UserDetail extends React.Component {

// renderList() {
//     return this.props.selectedProfile.map(profile => {
//       return (
//         <div class="card">
//       <div className="image">
//         <img src={profile.avatar} alt="Try again later!" />
//       </div>
//       <div className="content">
//         <a className="header">{profile.name}</a>
//         <div className="meta">
//           <span className="date">Age {profile.age} {profile.gender}
//     </span>
//         </div>
//         <div className="description">
//           {profile.name} lives in {profile.city}, {profile.state}. They went to {profile.college}
//         </div>
//       </div>
//       <div className="extra content">
//         <button onClick={() => this.props.likeProfile(profile)}
//                 className="ui button primary">
//                   Match with {profile.name}!
//         </button>
//       </div>
//     </div>
//       );
//     });
//   };

  render() {
    console.log("props 2", this.props)
    console.log("selected", this.props.selectedProfile)

    return (
      <div>
           <div className="ui container grid">
        <div className="ui row">
          <div className="column twelve wide">
      
         <b>Meet {this.props.selectedProfile.name}!</b>
            <br></br>
            <br></br>
            <br></br>

         <img className="ui centered medium image" src={this.props.selectedProfile.avatar}/>
         </div>
        </div>
      </div>
      </div>
    )
  }
}




const mapStateToProps = state => {
  return { selectedProfile: state.selectedProfile }
//   return { likeProfile: state.likeProfile }
}

export default connect(mapStateToProps)(UserDetail);