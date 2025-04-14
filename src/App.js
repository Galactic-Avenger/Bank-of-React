/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      credits: [],
      debits: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Fetch credit and debit transactions from APIs
  async componentDidMount() {
    try {
      const creditsResponse = await fetch('https://johnnylaicode.github.io/api/credits.json');
      const creditsData = await creditsResponse.json();

      const debitsResponse = await fetch('https://johnnylaicode.github.io/api/debits.json');
      const debitsData = await debitsResponse.json();
       // Update state and recalculate balance
      this.setState({
        credits: creditsData,
        debits: debitsData
      }, () => {
        this.updateAccountBalance();
      });
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  // Calculate net balance = credits - debits
  updateAccountBalance = () => {
    const { credits, debits } = this.state;

    const totalCredits = credits && credits.length ?
      credits.reduce((acc, credit) => acc + parseFloat(credit.amount), 0) : 0;

    const totalDebits = debits && debits.length ?
      debits.reduce((acc, debit) => acc + parseFloat(debit.amount), 0) : 0;

    this.setState({ accountBalance: totalCredits - totalDebits});
  }

  // Append new credit to the list
  addCredit = (newCredit) => {
    const updatedCredits = [...this.state.credits, newCredit];

    this.setState({ credits: updatedCredits }, this.updateAccountBalance);
  }

  // Append new debit to the list
  addDebit = (newDebit) => {
    const updatedDebits = [...this.state.debits, newDebit];
    this.setState({ debits: updatedDebits }, this.updateAccountBalance);
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }

  // Get the current time and return a greeting based on the time of day
  getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good morning';
    }
    else if (hour < 18) {
      return 'Good afternoon';
    }
    else {
      return 'Good evening';
    }
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Get the greeting message
    const greeting = this.getGreeting();
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} greeting = {greeting} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} greeting = {greeting} />)
    const CreditsComponent = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} accountBalance={this.state.accountBalance} greeting = {greeting} />) 
    const DebitsComponent = () => (<Debits debits={this.state.debits} addDebit={this.addDebit} accountBalance={this.state.accountBalance} greeting = {greeting} />) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/Bank-of-React">
        <div className="App">

          {/* Nav Bar for navigation */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/credits">Credits</Link>
          <Link to="/debits">Debits</Link>
          <Link to="/login">Login</Link>
          <Link to="/userProfile">Profile</Link>
        </nav>

        {/* Routes */}
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
