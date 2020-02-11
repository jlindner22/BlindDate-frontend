import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div className="down">
            <div className="ui container grid">
                <img className="ui centered medium image" src="https://lh4.googleusercontent.com/proxy/Mao6aPRTCA83ZBktGFcx7Auw91UbX4X_LY69tI4dlwYalmIVEXkf9tWN_qiQO5dTBdDequSk2BoZEKvH_zpQ_0li_Z15KEpffWUrEGgOvqfko_M0Oj817XMDQ38D" alt="sorry"></img>
                <br></br>
                <div className="ui centered row ">
                    <div className="ui vertical buttons">
                    <Link to={'/login'}>
                    <button className="ui pink button" type="submit">Log In</button>
                    </Link>
                    <br></br>
                    <Link to={'/signup'}>
                    <button className="ui pink button" type="submit">Sign Up</button>
                    </Link>
                    </div>
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

  export default Home;