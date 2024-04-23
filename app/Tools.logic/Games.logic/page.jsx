"use client";
import React, { useEffect, useState } from "react";
import "../Games.logic/Game.css";

const Page = () => {
  const size = 4;
  let [board, setBoard] = useState(
    Array.from({ length: size }, () => Array(size).fill(0))
  );

  let [currentScore, setCurrentScore] = useState(0);
  let [highScore, setHighScore] = useState(
    localStorage.getItem("2048-highScore") || 0
  );
  let [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeGame();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateScore = (value) => {
    setCurrentScore((currentScore) => currentScore + value);
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem("2048-highScore", currentScore);
    }
  };

  const restartGame = () => {
    setCurrentScore(0);
    setGameOver(false);
    initializeGame();
  };

  const initializeGame = () => {
    setBoard([...Array(size)].map((e) => Array(size).fill(0)));
    placeRandom();
    placeRandom();
  };

  const renderBoard = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      const row = cell.getAttribute("data-row");
      const col = cell.getAttribute("data-col");
      const value = board[row][col];
      cell.textContent = value !== 0 ? value : "";
      cell.className = `cell ${value !== 0 ? "filled" : ""}`;
      cell.style.backgroundColor = getColorForValue(value);
    });

    setTimeout(() => {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
        cell.classList.remove("merged-tile", "new-tile");
      });
    }, 300);
  };

  const getColorForValue = (value) => {
    switch (value) {
      case 2:
        return "#ffc0cb";
      case 4:
        return "#add8e6";
      case 8:
        return "#98fb98";
      case 16:
        return "#ffd700";
      case 32:
        return "#ffa07a";
      case 64:
        return "#87ceeb";
      case 128:
        return "#ffff00";
      case 256:
        return "#40e0d0";
      case 512:
        return "#ff69b4";
      case 1024:
        return "#7b68ee";
      case 2048:
        return "#ff6347";
      case 4096:
        return "#a9a9a9";
      default:
        return "gray"; // Default color for other values
    }
  };

  const placeRandom = () => {
    const available = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === 0) {
          available.push({ x: i, y: j });
        }
      }
    }

    if (available.length > 0) {
      const randomCell =
        available[Math.floor(Math.random() * available.length)];
      board[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
      const cell = document.querySelector(
        `[data-row="${randomCell.x}"][data-col="${randomCell.y}"]`
      );
      cell.classList.add("new-tile");
    }
  };

  const move = (direction) => {
    let hasChanged = false;
    if (direction === "ArrowUp" || direction === "ArrowDown") {
      for (let j = 0; j < size; j++) {
        const column = [...Array(size)].map((_, i) => board[i][j]);
        const newColumn = transform(column, direction === "ArrowUp");
        for (let i = 0; i < size; i++) {
          if (board[i][j] !== newColumn[i]) {
            hasChanged = true;
            board[i][j] = newColumn[i];
          }
        }
      }
    } else if (direction === "ArrowLeft" || direction === "ArrowRight") {
      for (let i = 0; i < size; i++) {
        const row = board[i];
        const newRow = transform(row, direction === "ArrowLeft");
        if (row.join(",") !== newRow.join(",")) {
          hasChanged = true;
          board[i] = newRow;
        }
      }
    }

    if (hasChanged) {
      placeRandom();
      renderBoard();
      checkGameOver();
    }
  };

  const transform = (line, moveTowardsStart) => {
    let newLine = line.filter((cell) => cell !== 0);
    if (!moveTowardsStart) {
      newLine.reverse();
    }

    for (let i = 0; i < newLine.length - 1; i++) {
      if (newLine[i] === newLine[i + 1]) {
        newLine[i] *= 2;
        updateScore(newLine[i]);
        newLine.splice(i + 1, 1);
      }
    }

    while (newLine.length < 4) {
      newLine.push(0);
    }

    if (!moveTowardsStart) {
      newLine.reverse();
    }

    return newLine;
  };

  const checkGameOver = () => {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === 0) {
          return;
        }

        if (j < size - 1 && board[i][j] === board[i][j + 1]) {
          return;
        }

        if (i < size - 1 && board[i][j] === board[i + 1][j]) {
          return;
        }
      }
    }

    setGameOver(true);
  };

  const handleKeyDown = (event) => {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      move(event.key);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <div className="score-container">
        <div>
          Score : <span id="current-score">{currentScore}</span>
        </div>
        <div>
          High Score : <span id="high-score">{highScore}</span>
        </div>
      </div>

      <div className="game-container">
        <div className="grid">
          {board.map((row, i) =>
            row.map((cell, j) => (
              <div
                className={`cell ${cell !== 0 ? "filled" : ""}`}
                style={{ backgroundColor: getColorForValue(cell) }}
                data-row={i}
                data-col={j}
                key={`${i}-${j}`}
              >
                {cell !== 0 ? cell : ""}
              </div>
            ))
          )}
        </div>
      </div>

      {gameOver && (
        <div id="game-over">
          Game Over!
          <button id="restart-btn" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
