/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

// Component to display and add new credit transactions
const Credits = (props) => {
  // Form submission to add new credit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredit = {
      description: e.target.description.value,
      amount: parseFloat(e.target.amount.value),
      date: new Date().toISOString(), // Auto-generate timestamp
    };
    props.addCredit(newCredit);  // Call parent function
    e.target.reset();            // Clear form fields
  };

  // Render the list of credits
  const creditsView = () => {
    return props.credits.map((credit, index) => {
      const date = credit.date.slice(0, 10); // Format date as yyyy-mm-dd
      const amount = Number(credit.amount).toFixed(2);
      return (
        <li key={credit.id || index}>
          {credit.description} | ${amount} | {date}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Credits</h1>

      {/* Show current account balance */}
      <h3>Account Balance: ${props.accountBalance.toFixed(2)}</h3>

      {/* Credit list */}
      <ul>{creditsView()}</ul>

      {/* Credit entry form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input type="text" name="description" required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" step="0.01" name="amount" required />
        </div>
        <button type="submit">Add Credit</button>
      </form>

      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;