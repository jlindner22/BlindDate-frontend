import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class EditLogin extends React.Component {

    state = {
        profileInfo: this.props.currentUser
      }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.currentUser){
          fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
            .then(response => response.json())
            .then(response => this.setState({ profileInfo: response}))
        } else {return null}
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Edit Account Settings</h1>
                <div className="ui container grid">
                <div className="ui row">
                <form className="ui form">
                {/* <div className="column ten wide"> */}
                    <br></br>
                    <br></br>
                   <b>Name</b>  <input className="ui form" onChange={this.handleText} type="text" name="name" placeholder="First Name" value={this.state.name}></input>
                    <br></br>
                    <br></br>
                    <b>Username</b> <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    <b>Password</b> <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br>
                    {/* <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br> */}
                    <b>Email</b> <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleText}></input>
                    <br></br>
                    <br></br>
                    <b>Phone Number</b> <input type="text" name="phone_number" placeholder="Phone Number (no spaces or symbols)" value={this.state.phone_number} onChange={this.handleText}></input>
                    <br></br>
                    <br></br>
                    <br></br>

                         <button className="ui blue right floated button" type="submit" onClick={()=> this.props.handlePreferenceChanges(this.props)}>Submit Preferences! </button>
                </form>
                    </div>
                    </div>
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
