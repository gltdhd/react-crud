import React, { useState, useEffect } from 'react';

function ExpenseForm({ onAddExpense, existingExpense, onSaveExpense, onCancel }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  // 수정 모드인 경우, 기존 값으로 폼을 초기화합니다.
  useEffect(() => {
    if (existingExpense) {
      setName(existingExpense.name);
      setCost(existingExpense.cost);
    }
  }, [existingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = { name, cost: Number(cost) };

    // 수정 모드인지 확인하고, 적절한 함수를 호출합니다.
    if (existingExpense) {
      onSaveExpense(existingExpense.id, expenseData);
    } else {
      onAddExpense(expenseData);
    }

    // 폼을 초기 상태로 리셋합니다.
    setName('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">지출 항목</label>
        <input required type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-6">
        <label htmlFor="cost" className="block text-gray-700 text-sm font-bold mb-2">비용</label>
        <input required type="number" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          추가
        </button>
      </div>
    </form>

  );
}

export default ExpenseForm;
