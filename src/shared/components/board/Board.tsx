import React, {useState} from 'react';
import {BoardProps, Task} from "./typings";
import {Button} from "../../ui/button/Button";
import {Link, useParams} from "react-router-dom";
import {Popup} from "../../ui/popup/Popup";
import {database} from "../../../entities/firebase";

//  uuid
const Board = ({tasks}: BoardProps) => {

	const [isOpen, setIsOpen] = useState(false);
	const [newBoardTitle, setNewBoardTitle] = useState('');
	const [newBoardDescription, setNewBoardDescription] = useState('');

	const createBoard = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};


	const pushNewBoard = () => {
		database.ref('boards').push({
			title: newBoardTitle,
		}).catch(alert);
	};

	const {id} = useParams();

	const boardId = 'q';

	const boardCollection = tasks.map(
		(task: Task) =>
			id === task.relatedTo.toString() ?
				(
					<li
						key={task.id}
						/* key пишем у обертки итерируемого эл-та,
						* иначе ошибка child in a list should have a unique "key" prop. */
					>
						<Link
							className='desk'
							to={`/board/${boardId}`}
						>
							<h3>
								{task.title}
							</h3>
						</Link>
					</li>
				)
				: ''
	);

	return (
		<React.Fragment>
			<ol className='row md:row-cols-4'>
				{boardCollection}

				<li>
					<Button
						className='btn btn--primary'
						onClick={createBoard}
					>
						Добавить доску
					</Button>
				</li>
			</ol>


			<Popup
				isOpen={isOpen}
				onCancel={closeModal}
				onSubmit={pushNewBoard}
				onSubmitText='Создать'
				title='Новая доска'
			>
				<div className='field'>
					{/*<div className="field__title">*/}
					{/*	Название*/}
					{/*</div>*/}
					<input
						className='field__control'
						type='text' placeholder='Название'
						value={newBoardTitle}
						onChange={(e) => setNewBoardTitle(e.target.value)}
					/>
				</div>

				<select>
					<option value="Рабочее пространство 1">
						Рабочее пространство 1
					</option>
					<option value="Рабочее пространство 2">
						Рабочее пространство 2
					</option>
				</select>
			</Popup>
		</React.Fragment>
	);
};

export {Board};
