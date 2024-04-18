"use client";
import { useState } from "react";

const MatrixCalculator = () => {
  const [matrixA, setMatrixA] = useState([
    [0, 0],
    [0, 0],
  ]);

  const [matrixB, setMatrixB] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [resultMatrix, setResultMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [determinantA, setDeterminantA] = useState(null);
  const [determinantB, setDeterminantB] = useState(null);
  const [inverseA, setInverseA] = useState(null);
  const [inverseB, setInverseB] = useState(null);

  const handleChange = (e, matrix, row, col) => {
    const value = e.target.value.trim() !== "" ? parseInt(e.target.value) : 0;
    const newMatrix = matrix.map((r, i) =>
      i === row ? r.map((c, j) => (j === col ? value : c)) : r
    );
    if (matrix === matrixA) {
      setMatrixA(newMatrix);
    } else {
      setMatrixB(newMatrix);
    }
  };

  const handleReset = () => {
    setMatrixA([
      [0, 0],
      [0, 0],
    ]);
    setMatrixB([
      [0, 0],
      [0, 0],
    ]);
    setResultMatrix([
      [0, 0],
      [0, 0],
    ]);
  };

  const handleAdd = () => {
    const result = matrixA.map((row, i) =>
      row.map((_, j) => matrixA[i][j] + matrixB[i][j])
    );
    setResultMatrix(result);
  };

  const handleSubtract = () => {
    const result = matrixA.map((row, i) =>
      row.map((_, j) => matrixA[i][j] - matrixB[i][j])
    );
    setResultMatrix(result);
  };

  const increaseRows = (matrix, rows) => {
    const newMatrix = [...matrix];
    for (let i = 0; i < rows; i++) {
      newMatrix.push(new Array(newMatrix[0].length).fill(0));
    }
    if (matrix === matrixA) {
      setMatrixA(newMatrix);
    } else {
      setMatrixB(newMatrix);
    }
  };

  const increaseColumns = (matrix, cols) => {
    const newMatrix = [...matrix];
    for (let i = 0; i < newMatrix.length; i++) {
      for (let j = 0; j < cols; j++) {
        newMatrix[i].push(0);
      }
    }
    if (matrix === matrixA) {
      setMatrixA(newMatrix);
    } else {
      setMatrixB(newMatrix);
    }
  };

  const multiplyBy2 = (matrix) => {
    return matrix.map((row) => row.map((col) => col * 2));
  };

  const handleMultiply = () => {
    const result = matrixA.map((row, i) =>
      row.map((_, j) => matrixA[i][j] * matrixB[i][j])
    );
    setResultMatrix(result);
  };
  const handleDeterminantA = () => {
    if (matrixA.length === 2 && matrixA[0].length === 2) {
      const determinant =
        matrixA[0][0] * matrixA[1][1] - matrixA[0][1] * matrixA[1][0];
      setDeterminantA(determinant);
    } else {
      alert("Determinant can only be calculated for a 2x2 matrix.");
    }
  };
  const handleDeterminantB = () => {
    if (matrixB.length === 2 && matrixB[0].length === 2) {
      const determinant =
        matrixB[0][0] * matrixB[1][1] - matrixB[0][1] * matrixB[1][0];
      setDeterminantB(determinant);
    } else {
      alert("Determinant can only be calculated for a 2x2 matrix.");
    }
  };
  const handleInverseA = () => {
    if (matrixA.length === 2 && matrixA[0].length === 2) {
      const determinant =
        matrixA[0][0] * matrixA[1][1] - matrixA[0][1] * matrixA[1][0];
      if (determinant === 0) {
        alert("Determinant is 0, inverse does not exist.");
      } else {
        const inverse = [
          [matrixA[1][1] / determinant, -matrixA[0][1] / determinant],
          [-matrixA[1][0] / determinant, matrixA[0][0] / determinant],
        ];
        setInverseA(inverse);
      }
    } else {
      alert("Inverse can only be calculated for a 2x2 matrix.");
    }
  };

  const handleInverseB = () => {
    if (matrixB.length === 2 && matrixB[0].length === 2) {
      const determinant =
        matrixB[0][0] * matrixB[1][1] - matrixB[0][1] * matrixB[1][0];
      if (determinant === 0) {
        alert("Determinant is 0, inverse does not exist.");
      } else {
        const inverse = [
          [matrixB[1][1] / determinant, -matrixB[0][1] / determinant],
          [-matrixB[1][0] / determinant, matrixB[0][0] / determinant],
        ];
        setInverseB(inverse);
      }
    } else {
      alert("Inverse can only be calculated for a 2x2 matrix.");
    }
  };
  const handleTransposeA = () => {
    const result = matrixA[0].map((col, i) => matrixA.map((row) => row[i]));
    setMatrixA(result);
  };
  const handleTransposeB = () => {
    const result = matrixB[0].map((col, i) => matrixB.map((row) => row[i]));
    setMatrixB(result);
  };
  const Multiplyby2 = () => {
    const result = matrixA.map((row) => row.map((col) => col * 2));
    setMatrixA(result);
  };
  const handlePowerof2 = () => {
    const result = matrixA.map((row) => row.map((col) => col ** 2));
    setMatrixA(result);
  };
  const Multiplyby2B = () => {
    const result = matrixB.map((row) => row.map((col) => col * 2));
    setMatrixB(result);
  };
  const handlePowerof2B = () => {
    const result = matrixB.map((row) => row.map((col) => col ** 2));
    setMatrixB(result);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Matrix A */}
        <div className="border border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Matrix A</h2>
          {matrixA.map((row, i) => (
            <div key={i} className="flex space-x-4 mb-2">
              {row.map((col, j) => (
                <input
                  key={j}
                  type="number"
                  value={matrixA[i][j]}
                  onChange={(e) => handleChange(e, matrixA, i, j)}
                  className="w-16 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none text-center"
                />
              ))}
            </div>
          ))}
          {/* Buttons */}
          <div className="flex gap-1 flex-wrap">
            <button onClick={() => increaseRows(matrixA, 1)} className="btn">
              Add Row
            </button>
            <button onClick={() => increaseColumns(matrixA, 1)} className="btn">
              Add Column
            </button>
            <button onClick={handleDeterminantA} className="btn">
              Determinant of A
            </button>
            {/* <button onClick={handleInverseA} className="btn">
              Inverse of A
            </button> */}
            <button onClick={handleTransposeA} className="btn">
              Transpose of A
            </button>
            <button onClick={Multiplyby2} className="btn">
              Multiply by 2
            </button>
            <button onClick={handlePowerof2} className="btn">
              Power of 2
            </button>

            {/* <button onClick={handleMultiply} className="btn bg-yellow-500">
              Multiply
            </button> */}
          </div>
        </div>

        {/* Matrix B */}
        <div className="border border-gray-300 p-4 rounded-lg text-black">
          <h2 className="text-xl font-semibold mb-4">Matrix B</h2>
          {matrixB.map((row, i) => (
            <div key={i} className="flex space-x-4 mb-2">
              {row.map((col, j) => (
                <input
                  key={j}
                  type="number"
                  value={matrixB[i][j]}
                  onChange={(e) => handleChange(e, matrixB, i, j)}
                  className="w-16 py-1 border border-gray-300 rounded-lg focus:outline-none text-center"
                />
              ))}
            </div>
          ))}
          {/* Buttons */}
          <div className="flex flex-wrap gap-1">
            <button onClick={() => increaseRows(matrixB, 1)} className="btn">
              Add Row
            </button>
            <button onClick={() => increaseColumns(matrixB, 1)} className="btn">
              Add Column
            </button>
            <button className="btn" onClick={handleDeterminantB}>
              Determinant B
            </button>
            {/* <button className="btn" onClick={handleInverseB}>
              Inverse B
            </button> */}
            <button className="btn" onClick={handleTransposeB}>
              Transpose of B
            </button>
            <button className="btn" onClick={Multiplyby2B}>
              Multiply by 2
            </button>
            <button className="btn" onClick={handlePowerof2B}>
              Power of 2
            </button>
          </div>
        </div>
      </div>

      {/* Operation Buttons */}
      <div className="flex flex-wrap mb-8">
        <button onClick={handleAdd} className="btn bg-green-500">
          Add
        </button>
        <button onClick={handleSubtract} className="btn bg-red-500">
          Subtract
        </button>
        <button
          onClick={handleMultiply}
          className=" bg-pink-600 rounded-sm font-medium"
        >
          Multiply
        </button>
        <button onClick={handleReset} className="btn bg-gray-500 text-white">
          Reset
        </button>
      </div>

      <div className="flex justify-around mb-8"></div>

      {/* Result Matrix */}
      <div className="result-matrix">
        <h2 className="text-xl font-semibold mb-1">Result Matrix</h2>
        <span className="text-lg font-semibold mb-2 text-green-700">
          A determinant: {determinantA}, B determinant : {determinantB}
        </span>
        {/* <span className="text-lg font-semibold mb-2 text-green-700">A Inverse: {inverseA}, B Inverse : {inverseB}</span> */}
        {resultMatrix.map((row, i) => (
          <div key={i} className="flex space-x-4 mb-2">
            {row.map((col, j) => (
              <span
                key={j}
                className="result-item border border-gray-300 px-3 py-2 rounded-lg"
              >
                {col}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <div className="flex justify-center"></div>
    </div>
  );
};

export default MatrixCalculator;
