import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import { Link } from 'react-router-dom';

class Signup extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
    )}    

    handleSubmit = (e) => { 
        e.preventDefault()
        console.log("password", this.state.password)
        if (this.state.password == this.state.password_confirmation) {
        fetch('http://localhost:3000/api/v1/signup', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },             
            body: JSON.stringify({ 
                username: this.state.username,
                password: this.state.password })   
            })
            .then(response => response.json())
            .then(response => {
                this.props.setUser(response)
                this.props.loggedIn(response)
                this.props.history.push('/profileform')
            }
                )
        } else { alert("Passwords don't match")}
    }

      render() {
            return (
            <div className="ui container grid">
            <div className="ui centered row">
            <form className="ui form" onSubmit={this.handleSubmit}>
                <b> Sign up for BlindDate!</b>
                <div className="field">
                    <br></br>
                    <br></br>
                    <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                </div>
                <div className="field">
                        <label>Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                <div className="field">
                        <label>Confirm Password</label>
                            <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange}></input>
                </div>
                <br></br>
                    <br></br>
                {/* <Link to={'/profileform'}> */}
                <button className="ui pink button" type="submit"
                >Sign Up</button>
                {/* </Link> */}

                <Link to={`/`}>
                <button className="ui basic pink button left floated">
                            Go Back
                </button>
                </Link>
            </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return  { currentUser: state.currentUser
            };
  }

  export default connect(mapStateToProps, {loggedIn})(Signup);