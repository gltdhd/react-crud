import React from 'react';

function TotalExpenses({ expenses }) {
  const total = expenses.reduce((total, expense) => total + expense.cost, 0);

  return (
    <div>
      <h3>총 지출액: ${total}</h3>
    </div>
  );
}

export default TotalExpenses;
