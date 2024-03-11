import React, { useState } from 'react';

function ExpenseList({ expenses, onSaveExpense, onDeleteExpense }) {
  const [editMode, setEditMode] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedCost, setEditedCost] = useState('');

  const handleEdit = (expense) => {
    setEditMode(expense.id);
    setEditedName(expense.name);
    setEditedCost(expense.cost);
  };

  const handleSave = (id) => {
    onSaveExpense(id, { name: editedName, cost: parseFloat(editedCost) || 0 });
    setEditMode(null);
    setEditedName(''); // 편집 상태 초기화
    setEditedCost(''); // 편집 상태 초기화
  };
  

  const handleCancel = () => {
    setEditMode(null);
  };

  return (
    <ul>
    {expenses.map((expense) => (
      <li key={expense.id} className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg my-2">
        <div className="flex justify-start items-center space-x-4 flex-1">
          {editMode === expense.id ? (
            <>
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="number"
                className="w-24 p-2 border border-gray-300 rounded"
                value={editedCost}
                onChange={(e) => setEditedCost(e.target.value)}
              />
            </>
          ) : (
            <>
              <span className="block flex-1">{expense.name}</span>
              <span className="block w-24">${expense.cost}</span>
            </>
          )}
        </div>
        <div className="flex justify-end items-center space-x-2">
          {editMode === expense.id ? (
            <>
              <button onClick={() => handleSave(expense.id)} className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">💾</button>
              <button onClick={handleCancel} className="text-sm bg-gray-500 hover:bg-gray-700 text-white py-1 px-2 rounded">❌</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit(expense)} className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded">✏️</button>
              <button onClick={() => onDeleteExpense(expense.id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">🗑️</button>
            </>
          )}
        </div>
      </li>
    ))}

    </ul>
  );
}

export default ExpenseList;
