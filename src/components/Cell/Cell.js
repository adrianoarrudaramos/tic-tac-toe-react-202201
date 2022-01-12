import React from "react";
import classNames from "classnames";

import "./Cell.css";

export const Cell = (props) => {
	let cellClasses = classNames({
		cell: true,
		winner: props.canHighlight,
	});

	let cellContentClass = classNames({
		"cell-content": true,
		populated: props.value,
	});

	return (
		<button className={cellClasses} onClick={props.onClick}>
			<span className={cellContentClass}>{props.value}</span>
		</button>
	);
};
