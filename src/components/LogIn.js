import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedIn } from '../actions';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-PPQS4D9',
    dataLayer: {
        'Log In': 'true'
    }
}


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
        fetch('https://blind-date-backend.herokuapp.com/api/v1/login', {
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
        TagManager.dataLayer(tagManagerArgs)
        this.props.history.push('/users')
        }
    })
    }

    render() {
        return (
            <div className="homeBG">
            <div className="down">
            <div className="ui container grid">
            <div className="ui centered row">
            <form className="ui form whiteBackground extraPadding loginDown" onSubmit={this.handleSubmit}>
            <h2 className="loginFont"> Log into BlindDate!</h2>
                <div className="field">
                    <br></br>
                    <label>Username</label>
                    <div className="ui input focus">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                </div>
                </div>
                <div className="field">
                        <label>Password</label>
                    <div className="ui input focus">
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                </div>
                </div>
                <br></br>
                <button className="large ui teal button right floated" type="submit">Log In</button>
                <Link to={`/`}>
                <button className="large ui basic teal button left floated">
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return  { currentUser: state.currentUser };
}

  export default connect(mapStateToProps, {loggedIn})(LogIn);