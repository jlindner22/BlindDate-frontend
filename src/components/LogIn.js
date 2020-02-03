import React from 'react';

class LogIn extends React.Component {

    render() {
     
        return (
            <div>
                <form class="ui form">
                    <div class="field">
                        <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name"></input>
                    </div>
                    <div class="field">
                            <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name"></input>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


  export default LogIn