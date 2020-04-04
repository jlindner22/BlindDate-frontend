import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import Home from './Home';

class EditLogin extends React.Component {

    state = {
        profileInfo: this.props.currentUser,
        profiles: this.props.profiles,
        deleted: false,
        name: this.props.currentUser.name,
        username: this.props.currentUser.username,
        // password: this.props.currentUser.password,
        email: this.props.currentUser.email,
        phone_number: this.props.currentUser.phone_number
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

    handleBackClick = () => {
        this.setState({
            viewAccountSettings: false
        })
    }

handleSubmit = (user, e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/users/${user}`,{
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        // password: this.state.password,
        email: this.state.email,
        phone_number: this.state.phone_number,
        })
    }) .then(response => response.json())
    .then(response => console.log(response))
    alert("Your changes have been submitted!")
    this.reload()

}

handleText = e => {
    this.setState({
        [e.target.name]: e.target.value
      }, console.log(e.target.value)
      )
}

    render() {
        let props = this.props.currentUser
        return (
            <div>
                <br></br>
                {this.state.deleted === false ?
                <div className="ui container grid">
                <div className="ui row">
                <form className="ui form" onSubmit={(e) => this.handleSubmit(props.id, e)}>
                <h2 className="grayFont centerText"> Account Settings</h2>
                    <br></br>
                    <br></br>
                    <b>Name</b>  <input type="text" name="name" placeholder="First Name" onChange={this.handleText} value={this.state.name}></input>
                    <br></br>
                    <br></br>
                    <b>Username</b> <input type="text" name="username" placeholder="Username" onChange={this.handleText} value={this.state.username}></input>
                    <br></br>
                    <br></br>
                    {/* <b>Password</b> <input type="password" name="password" placeholder="Password" onChange={this.handleText} value={this.state.password}></input>
                    <br></br>
                    <br></br> */}
                    {/* <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange}></input>
                    <br></br>
                    <br></br> */}
                    <b>Email</b> <input type="text" name="email" placeholder="Email" onChange={this.handleText} value={this.state.email}></input>
                    <br></br>
                    <br></br>
                    <b>Phone Number</b> <input type="text" name="phone_number" placeholder="Phone Number (no spaces or symbols)" onChange={this.handleText} value={this.state.phone_number}></input>
                    <br></br>
                    <br></br>
                    <br></br>
                     <input className="ui basic teal button left floated" type="button" value="Go Back" onClick={this.reload}/>
                     <input className="ui teal button right floated" type="submit" value="Save Changes" onClick={this.reload}/>
                     <button className="ui grey right floated button" onClick={()=> this.deleteUser(props)}> Delete Account </button>
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
