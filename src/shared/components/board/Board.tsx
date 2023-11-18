import React from 'react';
import {BoardProps, Task} from "./typings";
import {Button} from "../../ui/button/Button";
import {useParams} from "react-router-dom";

//  uuid
const Board = ({ tasks }: BoardProps) => {

	const { id } = useParams();
	console.log()

	if (!id) {
		return null;
	}

	const boardCollection = tasks.map(
		(task: Task) =>
			id === task.relatedTo.toString() ?
			(
				<li
					key={task.id}
					/* key пишем у обертки итерируемого эл-та,
					* иначе ошибка child in a list should have a unique "key" prop. */
				>
					<div
						className='desk'
					>
						<h3>
							{task.title}
						</h3>

						<Button className='btn btn--primary' onClick={() => alert('sss')}>Добавить карточку</Button>
					</div>
				</li>
				)
			: ''
	);

	return (
		<ol>
			{ boardCollection }
		</ol>
	);
};

export {Board};
