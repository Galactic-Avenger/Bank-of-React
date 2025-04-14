/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <img src="https://picsum.photos/200/200" alt="bank"/>

        <h1>Bank of React</h1>
        {/* Greeting message */}
        <h2>{this.props.greeting}, {this.state.user.userName}!</h2>
        <Link to="/userProfile">User Profile</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/credits">Credits page</Link>
        <br/>
        <Link to="/debits">Debits page</Link>
        <br/><br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;