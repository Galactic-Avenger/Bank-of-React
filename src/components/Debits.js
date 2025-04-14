/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

// Component to display and add new debit transactions
const Debits = (props) => {
  // Helper function to render the list of debit items
  const debitsView = () => {
    return props.debits.map((debit, index) => {
      const date = debit.date.slice(0,10);  // Extract 'yyyy-mm-dd'
      // Safely convert amount to number and fix to 2 decimals
      const amount = Number(debit.amount).toFixed(2);

      return (
        <li key={debit.id || index}>
          {debit.description} | ${amount} | {date}
        </li>
      );
    });
  };

  // Handle the form submission for new debit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDebit = {
      description: e.target.description.value,
      amount: Math.round(parseFloat(e.target.amount.value) * 100) / 100,
      date: new Date().toISOString()
    };
    props.addDebit(newDebit);
    e.target.reset();
  };

  return (
    <div>
      <h1>Debits</h1>
      {/* Greeting message */}
      <h2>{this.props.greeting}, {this.state.user.userName}!</h2>

      {/* Display current account balance, rounded to 2 decimals */}
      <h3>Account Balance: ${props.accountBalance.toFixed(2)}</h3>
      
      <ul>
        {debitsView()}
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Description: </label>
          <input type="text" name="description" placeholder="e.g. Groceries" required />
        </div>
        <div>
          <label>Amount: </label>
          <input type="number" step="any" name="amount" placeholder="e.g. 50" required />
        </div>
        <button type="submit">Add Debit</button>
      </form>

      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;