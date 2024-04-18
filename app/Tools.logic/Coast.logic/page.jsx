"use client";
import { useState } from 'react';

const CoastFireCalculator = () => {
  const [age, setAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [annualSpending, setAnnualSpending] = useState('');
  const [currentInvestedAssets, setCurrentInvestedAssets] = useState('');
  const [investmentRateOfReturn, setInvestmentRateOfReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(3);
  const [safeWithdrawalRate, setSafeWithdrawalRate] = useState(4);
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [coastFireNumber, setCoastFireNumber] = useState('');
  const [netWorthData, setNetWorthData] = useState([]);

  const calculateCoastFireNumber = () => {
    const yearsToRetirement = retirementAge - age;
    const inflationAdjustedReturn = investmentRateOfReturn - inflationRate;
    const coastFire = annualSpending / (safeWithdrawalRate * Math.pow((1 + (inflationAdjustedReturn / 100)), yearsToRetirement));
    setCoastFireNumber(coastFire.toFixed(2));

    // Calculate net worth year by year
    let netWorth = parseFloat(currentInvestedAssets);
    const netWorthValues = [netWorth];
    for (let i = 1; i <= yearsToRetirement; i++) {
      const annualReturn = netWorth * (investmentRateOfReturn / 100);
      const annualInflation = netWorth * (inflationRate / 100);
      netWorth += annualReturn - annualInflation + (monthlyContribution * 12);
      netWorthValues.push(netWorth.toFixed(2));
    }
    setNetWorthData(netWorthValues);
  };

  const netWorthChart = {
    labels: Array.from({ length: netWorthData.length }, (_, i) => i + age),
    datasets: [
      {
        label: 'Net Worth Over Time',
        data: netWorthData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md text-black">
      <h1 className="text-2xl font-semibold mb-4">Coast FIRE Calculator</h1>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <label className="block">
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Retirement Age:
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Annual Spending:
          <input
            type="number"
            value={annualSpending}
            onChange={(e) => setAnnualSpending(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Current Invested Assets:
          <input
            type="number"
            value={currentInvestedAssets}
            onChange={(e) => setCurrentInvestedAssets(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Investment Rate of Return (%):
          <input
            type="number"
            value={investmentRateOfReturn}
            onChange={(e) => setInvestmentRateOfReturn(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Inflation Rate (%):
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Safe Withdrawal Rate (%):
          <input
            type="number"
            value={safeWithdrawalRate}
            onChange={(e) => setSafeWithdrawalRate(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block">
          Monthly Contribution:
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </label>
      </div>
      <button
        onClick={calculateCoastFireNumber}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Calculate Coast FIRE Number
      </button>
      {coastFireNumber && <p className="mt-4">Coast FIRE Number: ${coastFireNumber}</p>}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Net Worth Over Time</h2>
        {/* <Line data={netWorthChart} /> */}
        {/* <LineChart
          data={netWorthData.map((value, index) => ({ x: index + age, y: parseFloat(value) }))}
          xAxisLabel="Year"
          yAxisLabel="Net Worth"
          height={300}
          width={500}
          margin={{ top: 20, right: 30, bottom: 30, left: 30 }}
        /> */}
      </div>
    </div>
  );
};

export default CoastFireCalculator;

