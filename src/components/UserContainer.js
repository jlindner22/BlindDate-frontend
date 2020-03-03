import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getPreferences } from '../actions';
import { Link } from 'react-router-dom';

class UserContainer extends React.Component {

  state = {
    nameSorted: false,
    ageSorted: false,
    nameButtonClicked: false,
    ageButtonClicked: false,
    // namesAZ: this.props.profiles,
    // ageAscending: this.props.profiles
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
  }

  filterLink = () => {
    this.props.history.push('/filters')
  }

  handleNameSort = () => {
    this.setState({
      // namesAZ: this.props.profiles.sort((a, b) => {
      //   if (a.name.toLowerCase() < b.name.toLowerCase()) {
      //     return 1;
      //   } if (a.name.toLowerCase() > b.name.toLowerCase()) {
      //     return -1;
      //   }
      //   return 0;
      // }),
      nameSorted: !this.state.nameSorted,
      nameButtonClicked: true
    })
    if (this.state.nameSorted === false) {
      this.renderNameSortedList()
    } else {
      this.renderReverseNameSortedList()
    }
  }

  // handleAgeSort = () => {
  //   this.setState({
  //     ageAscending: this.props.profiles.sort(),
  //     ageSorted: !this.state.ageSorted,
  //     ageButtonClicked: true
  //   })
  //   if (this.state.ageSorted === false) {
  //     this.renderYoungToOld()
  //   } else {
  //     this.renderReverseSortedAge()
  //   }
  // }

  renderNameSortedList = () => {
    let nameOrder = this.props.profiles.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      } if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    })
     console.log("normal sorted", nameOrder)
    return (this.props.profiles && nameOrder.map(profile => {
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
    )}
  ))
}

renderReverseNameSortedList = () => {
  let reverseSortedNames = this.props.profiles.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    return 0;
  })
   console.log("reverse sorted names", reverseSortedNames)
  return (this.props.profiles && reverseSortedNames.map(profile => {
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
}

// renderYoungToOld() {
//   let sortedAge = this.props.profiles.sort()
//    console.log("sorted age", sortedAge)
//   return (this.props.profiles && sortedAge.map(profile => {
//     return (
//       <div className="card">
//     <div className="image">
//       <img className="ui image" src={profile.avatar} alt="Try again later!" />
//     </div>
//     <div className="content">
//       <a className="header">{profile.name}</a>
//       <div className="meta">
//         <span className="date">Age {profile.age} 
//       </span>
//       </div>
//       <div className="description">
//         {profile.name} lives in {profile.city}, {profile.state}.
//       </div>
//     </div>
//     <div className="extra content"><Link to={`/users/${profile.id}`}> 
//       <button onClick={() => this.props.viewProfile(profile)}
//               className="ui pink basic button">
//                 View Profile!
//       </button></Link>
//       <div className="ui right floated">
//       {profile.gender !== "Female" ? <i className="mars icon" ></i>  :  <i className="venus icon"></i> }
//       </div>
//     </div>
//   </div>
//     );
//   }))
// }

// renderReverseSortedAge = () => {
//   let reverseSortedAge = this.props.profiles.sort((a, b) => {
//     if (a.age < b.age) {
//       return 1;
//     } if (a.age > b.age) {
//       return -1;
//     }
//     return 0;
//   })
//    console.log("reverse sorted age", reverseSortedAge)
//   return (this.props.profiles && reverseSortedAge.map(profile => {
//     return (
//       <div className="card">
//     <div className="image">
//       <img className="ui image" src={profile.avatar} alt="Try again later!" />
//     </div>
//     <div className="content">
//       <a className="header">{profile.name}</a>
//       <div className="meta">
//         <span className="date">Age {profile.age} 
//       </span>
//       </div>
//       <div className="description">
//         {profile.name} lives in {profile.city}, {profile.state}.
//       </div>
//     </div>
//     <div className="extra content"><Link to={`/users/${profile.id}`}> 
//       <button onClick={() => this.props.viewProfile(profile)}
//               className="ui pink basic button">
//                 View Profile!
//       </button></Link>
//       <div className="ui right floated">
//       {profile.gender !== "Female" ? <i className="mars icon" ></i>  :  <i className="venus icon"></i> }
//       </div>
//     </div>
//   </div>
//       );
//     }))
//   }

  render() {
    return (
      <div>
      <br></br>
      <div className="ui container">
        <br></br>
        {/* <Link to= "/filters"> */}
        <button className="ui pink button" onClick={this.filterLink}>
        View/Set Preferences
        </button>
      {/* </Link> */}
      <Link to= "/filteredprofiles">
      <button className="ui pink button">
        See who fits your preferences!
      </button>
      </Link>
      <button className="ui pink button" onClick={this.handleNameSort} >
        {this.state.nameSorted === false ? "Sort Z -> A" : "Sort A -> Z"}
      </button>
      {/* <button className="ui pink button" onClick={this.handleAgeSort}>
        {this.state.ageSorted === false ? "Sort age descending" : "Sort age ascending"}
      </button> */}
      <br></br>
      <br></br>
      <br></br>
      <div className="ui centered row">
        <div className="ui link cards">
        {this.state.ageButtonClicked === false && this.state.nameSorted === true ? this.renderNameSortedList() : this.renderReverseNameSortedList()}
        {/* {this.state.nameButtonClicked === false && this.state.ageButtonClicked === true && this.state.ageSorted === true? this.renderYoungToOld() : this.renderReverseSortedAge()}
        {this.state.ageButtonClicked === true && this.state.nameSorted === false ? this.renderYoungToOld() : this.renderReverseSortedAge()} */}
        </div>
      </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { profiles: state.profiles,
           selectedProfile: state.selectedProfile,
           currentUser: state.currentUser,
           preferences: state.preferences };
}

export default connect(mapStateToProps, {viewProfile, getPreferences, loggedIn})(UserContainer);
