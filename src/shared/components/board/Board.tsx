import React, { FC } from 'react';
import { BoardProps } from "./board.interface";
import Button from "../../ui/button/Button";

//  uuid
const Board: FC<BoardProps> = ({ tasks }) => {
	const boardCollection = tasks.map(
		(task) =>
		<li>
			<div
				className='desk'
				key={task.id}
			>
				<h3>
					{task.title}
				</h3>

				<Button
					btnText="Добавить карточку"
				/>
			</div>
		</li>
	);

	return (
		<ol>
			{ boardCollection }
		</ol>
	);
};

export default Board;
