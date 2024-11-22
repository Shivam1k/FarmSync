// import React, { useState } from "react";

// const FinancialTracker = () => {
//   const [transactions, setTransactions] = useState([]); // Store transactions (income/expenses)
//   const [amount, setAmount] = useState("");
//   const [description, setDescription] = useState("");
//   const [transactionType, setTransactionType] = useState("income"); // 'income' or 'expense'

//   // Add a transaction (income/expense)
//   const addTransaction = () => {
//     if (!amount || !description) {
//       alert("Please fill out all fields.");
//       return;
//     }
    
//     const newTransaction = {
//       amount: parseFloat(amount),
//       description,
//       type: transactionType,
//       date: new Date().toLocaleDateString(),
//     };

//     setTransactions((prev) => [...prev, newTransaction]);
//     setAmount("");
//     setDescription("");
//   };

//   // Calculate total income and expenses
//   const getTotalIncome = () => {
//     return transactions
//       .filter((transaction) => transaction.type === "income")
//       .reduce((acc, transaction) => acc + transaction.amount, 0);
//   };

//   const getTotalExpenses = () => {
//     return transactions
//       .filter((transaction) => transaction.type === "expense")
//       .reduce((acc, transaction) => acc + transaction.amount, 0);
//   };

//   const getProfitLoss = () => {
//     const income = getTotalIncome();
//     const expenses = getTotalExpenses();
//     return income - expenses;
//   };

//   return (
//     <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-green-700 mb-4">Financial Tracker</h2>
      
//       {/* Transaction Form */}
//       <div className="mb-6">
//         <label className="block text-sm font-semibold">Amount</label>
//         <input
//           type="number"
//           className="w-full p-2 border rounded-md mb-4"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />

//         <label className="block text-sm font-semibold">Description</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded-md mb-4"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <label className="block text-sm font-semibold">Transaction Type</label>
//         <select
//           className="w-full p-2 border rounded-md mb-4"
//           value={transactionType}
//           onChange={(e) => setTransactionType(e.target.value)}
//         >
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>

//         <button
//           onClick={addTransaction}
//           className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Add Transaction
//         </button>
//       </div>

//       {/* Financial Summary */}
//       <div className="mt-6 text-green-800">
//         <h3 className="text-lg font-semibold">Financial Summary</h3>
//         <div className="mt-4">
//           <p>Total Income: ₹{getTotalIncome().toFixed(2)}</p>
//           <p>Total Expenses: ₹{getTotalExpenses().toFixed(2)}</p>
//           <p>Profit/Loss: ₹{getProfitLoss().toFixed(2)}</p>
//         </div>
//       </div>

//       {/* Transaction List */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold">Transaction History</h3>
//         <ul>
//           {transactions.map((transaction, index) => (
//             <li
//               key={index}
//               className={`mt-2 p-4 border rounded-md ${
//                 transaction.type === "income" ? "bg-green-50" : "bg-red-50"
//               }`}
//             >
//               <p>{transaction.description}</p>
//               <p className="font-bold">
//                 ₹{transaction.amount.toFixed(2)} - {transaction.type} on {transaction.date}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FinancialTracker;



import React, { useState } from "react";

const FinancialTracker = () => {
  const [transactions, setTransactions] = useState([]); // Store transactions (income/expenses)
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("income"); // 'income' or 'expense'

  // Add a transaction (income/expense)
  const addTransaction = () => {
    if (!amount || !description) {
      alert("Please fill out all fields.");
      return;
    }
    
    const newTransaction = {
      amount: parseFloat(amount),
      description,
      type: transactionType,
      date: new Date().toLocaleDateString(),
    };

    setTransactions((prev) => [...prev, newTransaction]);
    setAmount("");
    setDescription("");
  };

  // Calculate total income and expenses
  const getTotalIncome = () => {
    return transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const getTotalExpenses = () => {
    return transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const getProfitLoss = () => {
    const income = getTotalIncome();
    const expenses = getTotalExpenses();
    return income - expenses;
  };

  return (
    <div className="mt-8 bg-green-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
        🌱 Financial Tracker for Farmers 🌾
      </h2>
      
      {/* Transaction Form */}
      <div className="mb-8 p-6 bg-green-50 rounded-lg shadow-md">
        <label className="block text-sm font-semibold text-green-700 mb-2">Amount (₹)</label>
        <input
          type="number"
          className="w-full p-3 border rounded-md mb-4 bg-white focus:ring-2 focus:ring-green-400"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <label className="block text-sm font-semibold text-green-700 mb-2">Description</label>
        <input
          type="text"
          className="w-full p-3 border rounded-md mb-4 bg-white focus:ring-2 focus:ring-green-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />

        <label className="block text-sm font-semibold text-green-700 mb-2">Transaction Type</label>
        <select
          className="w-full p-3 border rounded-md mb-4 bg-white focus:ring-2 focus:ring-green-400"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="income">Income (e.g., crop sales)</option>
          <option value="expense">Expense (e.g., fertilizer, labor)</option>
        </select>

        <button
          onClick={addTransaction}
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
        >
          Add Transaction
        </button>
      </div>

      {/* Financial Summary */}
      <div className="mt-6 text-green-800 text-lg">
        <h3 className="font-semibold">Financial Summary</h3>
        <div className="mt-4">
          <p>Total Income: <span className="font-bold">₹{getTotalIncome().toFixed(2)}</span></p>
          <p>Total Expenses: <span className="font-bold">₹{getTotalExpenses().toFixed(2)}</span></p>
          <p>Profit/Loss: <span className={`font-bold ${getProfitLoss() >= 0 ? "text-green-600" : "text-red-600"}`}>₹{getProfitLoss().toFixed(2)}</span></p>
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-700 mb-4">Transaction History</h3>
        <ul className="space-y-4">
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={`p-4 rounded-md shadow-md ${
                transaction.type === "income" ? "bg-green-100" : "bg-red-100"
              } border-l-4 ${
                transaction.type === "income" ? "border-green-500" : "border-red-500"
              }`}
            >
              <p className="text-sm">{transaction.description}</p>
              <p className="font-bold text-lg">
                ₹{transaction.amount.toFixed(2)} - {transaction.type} on {transaction.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialTracker;
