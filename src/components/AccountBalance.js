/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

// Simple component to show the user's current balance
class AccountBalance extends Component {
  render() {
    return (
      <div>
        {/* Format balance to 2 decimal places */}
        Balance: ${this.props.accountBalance.toFixed(2)}
      </div>
    );
  }
}

export default AccountBalance;