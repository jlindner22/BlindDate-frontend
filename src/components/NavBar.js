import React from 'react';
import { connect } from 'react-redux';

class NavBar extends React.Component {

    render() {
        return (
            <div>
            <div class="ui secondary pointing menu">
            <a class="active item">
                Home
            </a>
            <a class="item">
                Matches
            </a>
            <a class="item">
                Messages
            </a>
            <div class="right menu">
                <a class="ui item">
                Logout
                </a>
            </div>
            </div>
            <div class="ui segment">
            <p></p>
            </div>
            </div>
        )
      }
    }
  
export default NavBar;