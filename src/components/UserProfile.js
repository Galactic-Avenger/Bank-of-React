/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Displays user profile info such as username and membership date
class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>User Profile</h1>
        
        {/* Show user data passed from parent (App.js) */}
        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>

        {/* Navigation link back to home */}
        <br/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default UserProfile;