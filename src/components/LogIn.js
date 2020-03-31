import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';

class LogIn extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }    

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
              },             
              body: JSON.stringify( this.state )
        })
        .then (resp => resp.json())
        .then(response => {
            if (response.errors){alert(response.errors)
            } else {
        this.props.setUser(response)
        this.props.loggedIn(response)
        this.props.history.push('/users')
        }
    })
    }

    render() {
        return (
            <div className="down">
            <div className="ui container grid">
            <div className="ui centered row">
            <form className="ui form" onSubmit={this.handleSubmit}>
            <h2><b> Log in to BlindDate!</b></h2>
                <div className="field">
                    <br></br>
                    <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                </div>
                <div className="field">
                        <label>Password</label>
                            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                <button className="ui teal button" type="submit">Log In</button>
                <Link to={`/`}>
                <button className="ui basic teal button left floated">
                            Go Back
                </button>
                </Link>
            </form> 
            </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return  { currentUser: state.currentUser };
}

  export default connect(mapStateToProps, {loggedIn})(LogIn);