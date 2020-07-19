import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../assets/home_logo.jpg';

const Home = (props) => {

        return (
            <div className="homeBG">
            <div className="halfDown">
            <div className="ui container grid ">
            <div className="ui centered row ">
                <h1 className="whiteFont">Welcome to</h1>
                </div>
                <img className="ui centered circular large image" src={homeLogo} alt="logo"></img>
                <br></br>
                {props.currentUser ? null :
                <div className="ui centered row ">
                    <div className="ui vertical buttons ">
                    <br></br>
                    <Link to={'/login'}>
                    <button className="large ui teal button" type="submit">Log In</button>
                    </Link>
                    <br></br>
                    <Link to={'/signup'}>
                    <button className="large ui teal button" type="submit">Sign Up</button>
                    </Link>
                    </div>
            <br></br>
            <br></br>
            <br></br>
                </div> }
            </div>
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

export default Home;
