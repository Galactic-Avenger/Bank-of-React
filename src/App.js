/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  async componentDidMount() {
    try {
      const creditsResponse = await fetch('https://johnnylaicode.github.io/api/credits.json');
      const creditsData = await debitsResponse.json();

      const debitsResponse = await fetch('https://johnnylaicode.github.io/api/debits.json');
      const debitsData = await debitsResponse.json();

      this.setState({
        credits: creditsData,
        debits: debitsData,
      });
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  updateAccountBalance = () => {
    const { credits, debits } = this.state;
    const totalCredits = credits.reduce((acc, credit) => acc + credit.amount, 0);
    const totalDebits = debits.reduce((acc, debit) => acc + debit.account, 0);

    this.setState({ accountBalance: totalCredits - totalDebits });
  }

  addCredit = (newCredit) => {
    const updatedCredits = [...this.state.credits, newCredit];
    const updatedBalance = parseFloat(this.state.accountBalance) + parseFloat(newCredit.amount);

    this.setState(
      { credits: updatedCredits, accountBalance: updatedBalance }
    );
  }

  addDebit = (newDebit) => {
    const updatedDebits = [...this.state.debits, newDebit];
    const updatedBalance = parseFloat(this.state.accountBalance) - parseFloat(newDebit.amount);

    this.setState(
      { debits: updatedDebits, accountBalance: updatedBalance}
    );
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} addCredit={this.addCredit} accountBalance={this.state.accountBalance} />) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebit={this.addDebit} accountBalance={this.state.accountBalance} />) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-starter-code">
        <div>
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