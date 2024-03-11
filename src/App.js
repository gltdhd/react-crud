import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  // 새 지출 항목을 추가하는 함수
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  // 지출 항목을 수정하는 함수
  const saveExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(expense => expense.id === id ? { ...expense, ...updatedExpense } : expense));
  };

  // 지출 항목을 삭제하는 함수
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };


  return (
   <div className="container mx-auto mt-8">
      <div className="w-full max-w-2xl mx-auto bg-yellow-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="mb-4 text-xl font-bold text-center">지출 관리</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onSaveExpense={saveExpense} onDeleteExpense={deleteExpense} />
      <TotalExpenses expenses={expenses} />
      </div>
    </div>
  );

}

export default App;
