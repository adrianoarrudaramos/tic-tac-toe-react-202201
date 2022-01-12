import React, { useState } from "react";

import "./Game.css";
import { Board } from "../Board/Board";

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
	const winningsCombination = [];

	const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

	const onCellClicked = (cellIndex) => {
		if (isCellEmpty(cellIndex)) {
			const newCellValues = [...cellValues];

			newCellValues[cellIndex] = xIsNext ? "X" : "O";
			setCellValues(newCellValues);
			setXIsNext(!xIsNext);
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

			<div id="modal-overlay">
				<div id="game-result-modal">
					<div id="result-container">
						<div id="winner-container">
							<span></span>
						</div>
					</div>
					<div id="new-game-container">
						<button id="new-game-button">Start New Game</button>
					</div>
				</div>
			</div>
		</>
	);
};
