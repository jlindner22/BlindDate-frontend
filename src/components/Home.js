import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

        return (
            <div className="homeBG">
            <div className="halfDown">
            <div className="ui container grid ">
            <div className="ui centered row ">
                <h1 className="whiteFont">Welcome to</h1>
                </div>
                <img className="ui centered circular large image" src="https://lh4.googleusercontent.com/proxy/Mao6aPRTCA83ZBktGFcx7Auw91UbX4X_LY69tI4dlwYalmIVEXkf9tWN_qiQO5dTBdDequSk2BoZEKvH_zpQ_0li_Z15KEpffWUrEGgOvqfko_M0Oj817XMDQ38D" alt="logo"></img>
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
