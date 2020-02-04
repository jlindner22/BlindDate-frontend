import React from 'react';
import { Link } from 'react-router-dom';


class LogIn extends React.Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        // console.log("handle name", e.target.name)
        // console.log("handle value", e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        }
        )}    


      render() {
     
        return (
                <div className="ui container grid">
                <div className="ui centered row">
                <form className="ui form">
                   <b> Log in to BlindDate</b>
                    <div className="field">
                        <br></br>
                        <br></br>
                        <label>Email</label>
                            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className="field">
                            <label>Password</label>
                                <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <Link to={'/users'}>
                    <button className="ui pink button" type="submit">Log In</button>
                    </Link>

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


  export default LogIn