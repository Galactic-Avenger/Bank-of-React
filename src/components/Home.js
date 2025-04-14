/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

// Home page with navigation and balance summary
class Home extends Component {
  render() {
    return (
      <div>
        {/* Decorative placeholder image */}
        <img src="https://picsum.photos/200/200" alt="bank"/>

        <h1>Bank of React</h1>
        {/* Greeting message */}
        <h2>{this.props.greeting}, {this.state.user.userName}!</h2>

        {/* Navigation Links to different views */}
        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/credits">Credits page</Link>
        <br/>
        <Link to="/debits">Debits page</Link>
        <br/><br/>
        {/* Display the current account balance */}
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;