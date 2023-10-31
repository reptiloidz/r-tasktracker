import React from 'react';
import { BoardProps } from "./typings";
import Button from "../../ui/button/Button";

//  uuid
const Board = ({ tasks }: BoardProps) => {
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
