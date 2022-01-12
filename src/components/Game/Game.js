import React, { useState } from "react";

import "./Game.css";
import { Board } from "../Board/Board";
import { ResultModal } from "../ResultModal/ResultModal";
import { calculateWinner } from "../../utils/WinnerCalculator";

export const Game = () => {
	const [cellValues, setCellValues] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]);
	const [xIsNext, setXIsNext] = useState(true);
	const [isGameOver, setIsGameOver] = useState(false);
	const [numberOfTurnsLeft, setNumbersOfTurnsLeft] = useState(9);
	const [winner, setWinner] = useState();
	const [winningsCombination, setWinningCombination] = useState();

	const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

	const restartGame = () => {
		setCellValues(["", "", "", "", "", "", "", "", ""]);
		setXIsNext(true);
		setIsGameOver(false);
		setWinner(undefined);
		setNumbersOfTurnsLeft(9);
		setWinningCombination([]);
	};

	const onCellClicked = (cellIndex) => {
		if (isCellEmpty(cellIndex)) {
			const newCellValues = [...cellValues];
			newCellValues[cellIndex] = xIsNext ? "X" : "O";

			const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;

			// Calculate the result
			const calcResult = calculateWinner(
				newCellValues,
				newNumberOfTurnsLeft,
				cellIndex
			);

			setCellValues(newCellValues);
			setXIsNext(!xIsNext);
			setIsGameOver(calcResult.hasResult);
			setWinner(calcResult.winner);
			setNumbersOfTurnsLeft(newNumberOfTurnsLeft);
			setWinningCombination(calcResult.winningCombination);
		}
	};

	return (
		<>
			<div id="game">
				<h1>Tic Tac Toe</h1>
				<Board
					cellValues={cellValues}
					winningsCombination={winningsCombination}
					cellClicked={onCellClicked}
				/>
			</div>
			<ResultModal
				isGameOver={isGameOver}
				winner={winner}
				onNewGameClicked={restartGame}
			/>
		</>
	);
};
