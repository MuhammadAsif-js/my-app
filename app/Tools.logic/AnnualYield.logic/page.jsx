"use client";
// pages/APYCalculator.js
import React, { useState } from 'react';

const APYCalculator = () => {
  const [initialDeposit, setInitialDeposit] = useState('');
  const [apr, setAPR] = useState('');
  const [apy, setAPY] = useState('');
  const [months, setMonths] = useState('');
  const [compoundingOption, setCompoundingOption] = useState('');
  const [monthlyDeposits, setMonthlyDeposits] = useState('');
  const [finalBalance, setFinalBalance] = useState(null);

  const calculateFinalBalance = () => {
    // Convert percentages to decimals
    const decimalAPR = parseFloat(apr) / 100;
    const decimalAPY = parseFloat(apy) / 100;

    // Calculate interest rate based on APY
    const interestRate = Math.pow(1 + decimalAPY, 1 / 12) - 1;

    // Calculate final balance based on compounding frequency
    let totalBalance = parseFloat(initialDeposit);
    const numMonths = parseInt(months);

    for (let i = 0; i < numMonths; i++) {
      totalBalance *= 1 + interestRate;
      if (compoundingOption === 'monthly') {
        totalBalance += parseFloat(monthlyDeposits);
      } else if (compoundingOption === 'quarterly' && (i + 1) % 3 === 0) {
        totalBalance += parseFloat(monthlyDeposits);
      } else if (compoundingOption === 'semi-annually' && (i + 1) % 6 === 0) {
        totalBalance += parseFloat(monthlyDeposits);
      } else if (compoundingOption === 'annually' && (i + 1) % 12 === 0) {
        totalBalance += parseFloat(monthlyDeposits);
      }
    }

    setFinalBalance(totalBalance.toFixed(2));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <label className="block mb-1">Initial Deposit:</label>
        <input
          type="number"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">APR (%):</label>
        <input
          type="number"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={apr}
          onChange={(e) => setAPR(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">APY (%):</label>
        <input
          type="number"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={apy}
          onChange={(e) => setAPY(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Months:</label>
        <input
          type="number"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-1">Compounding Option:</label>
        <select
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={compoundingOption}
          onChange={(e) => setCompoundingOption(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="semi-annually">Semi-Annually</option>
          <option value="annually">Annually</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Monthly Deposits:</label>
        <input
          type="number"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={monthlyDeposits}
          onChange={(e) => setMonthlyDeposits(e.target.value)}
        />
      </div>
    </div>
    <button
      className="block w-full font-semibold text-lg px-4 py-2 mt-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
      onClick={calculateFinalBalance}
    >
      Calculate
    </button>
    {finalBalance !== null && (
      <p className="mt-4 text-xl font-bold text-green-500">Final Balance: ${finalBalance}</p>
    )}
  </div>
  );
};

export default APYCalculator;
