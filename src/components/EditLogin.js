import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
// import { Link } from 'react-router-dom';
// import HomeAfterDelete from './HomeAfterDelete';
import Home from './Home';

class EditLogin extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        profiles: this.props.profiles,
        deleted: false
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    logout = () => {
        this.setState({ currentUser: null}
          , () => {
            localStorage.removeItem("user_id")
         }
        )
      }

    reload = () => {
        window.location.reload();
    }

    deleteUser = (user) => {
        alert("Are you sure?")
        fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
          method: 'DELETE',
        })
        this.setState({
            profiles: [...this.state.profiles].filter(deleteUser => user !== deleteUser)
        })
        this.setState({
            deleted: true
        })
        this.logout();
    }

    render() {
        let props = this.props.currentUser
        console.log("profiles?", this.state.profiles)
        return (
            <div>
                <br></br>
                {this.state.deleted === false ?
                // <h1>Edit Account Settings</h1>
                <div className="ui container grid">
                <div className="ui row">
                <form className="ui form">
                    <br></br>
                    <br></br>
                    <b>Name</b>  <input className="ui form" onChange={this.handleText} type="text" name="name" placeholder="First Name" value={props.name}></input>
                    <br></br>
                    <br></br>
                    <b>Username</b> <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={props.username}></input>
                    <br></br>
                    <br></br>
                    <b>Password</b> <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={props.password}></input>
                    <br></br>
                    <br></br>
                    {/* <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br> */}
                    <b>Email</b> <input type="text" name="email" placeholder="Email" onChange={this.handleText} value={props.email}></input>
                    <br></br>
                    <br></br>
                    <b>Phone Number</b> <input type="text" name="phone_number" placeholder="Phone Number (no spaces or symbols)" onChange={this.handleText} value={props.phone_number}></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="ui basic blue button left floated" onClick={this.reload}>Go back</button>
                    <button className="ui blue right floated button" type="submit" onClick={()=> this.props.handlePreferenceChanges(this.props)}>Submit Changes </button>
                    <button className="ui red right floated button" onClick={()=> this.deleteUser(props)}> Delete Account </button>
                </form>
                    </div>
                </div> 
                : <Home/> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("edit profile state", state)
    return { currentUser: state.currentUser,
             profiles: state.profiles
             };
  }

export default connect(mapStateToProps, {loggedIn})(EditLogin);
