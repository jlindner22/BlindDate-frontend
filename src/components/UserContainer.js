import React from 'react';
import { connect } from 'react-redux';
import { viewProfile, loggedIn, getPreferences } from '../actions';
import { Link } from 'react-router-dom';

class UserContainer extends React.Component {

  state = {
    nameSorted: false,
    ageSorted: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.getPreferences()
    console.log(this.state.nameSorted)
  }

  filterLink = () => {
    this.props.history.push('/filters')
  }

//   nameSort = () => {
//   let sorted = this.props.profiles.map(user => user.name).sort() 
//   console.log(sorted)
//     return sorted
// }


// if (this.state.nameSorted === true) {
//   let sorted = this.props.profiles.map(user => user.name).sort() 
//   console.log(sorted)
//     return sorted;
//   } else {
//       let notSorted = this.props.profiles.map(user => user.name)
//       console.log(notSorted)
//         return notSorted;
//       }

  handleNameSort = () => {
    this.setState({nameSorted: !this.state.nameSorted})
  }


  handleAgeSort = () => {
    this.setState({ageSorted: !this.state.ageSorted}, () => console.log(this.state.ageSorted))
  }

  renderNameSortedList = () => {
    console.log("user container props", this.props)
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

renderYoungToOld() {
  let sortedAge = this.props.profiles.sort()
  //   (a, b) => {
  //   if (a.age > b.age) {
  //     return 1;
  //   } if (a.age < b.age) {
  //     return -1;
  //   }
  //   return 0;
  // })
   console.log("sorted age", sortedAge)
  return (this.props.profiles && sortedAge.map(profile => {
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


renderReverseSortedAge = () => {
  let reverseSortedAge = this.props.profiles.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    } if (a.age > b.age) {
      return -1;
    }
    return 0;
  })
   console.log("reverse sorted age", reverseSortedAge)
  return (this.props.profiles && reverseSortedAge.map(profile => {
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
      <button className="ui pink button" onClick={this.handleAgeSort}>
      {this.state.ageSorted === false ? "Sort oldest to youngest" : "Sort yougest to oldest"}
      </button>
      <br></br>
      <br></br>
      <br></br>
      <div className="ui centered row">
        <div className="ui link cards">
        {this.state.nameSorted === true ? this.renderNameSortedList() : this.renderReverseNameSortedList()}
        {this.state.ageSorted === false ? this.renderYoungToOld() : this.renderReverseSortedAge()}
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
