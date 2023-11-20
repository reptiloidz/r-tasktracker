import React, {useState} from 'react';
import {BoardProps, Task} from "./typings";
import {Button} from "../../ui/button/Button";
import {Link, useParams} from "react-router-dom";
import {Popup} from "../../ui/popup/Popup";
import {database} from "../../../entities/firebase";
import {Dropdown} from "../../ui/dropdown/Dropdown";
import {useWorkspaces} from "../../../entities/hooks";

//  uuid
const Board = ({tasks}: BoardProps) => {

	const [isOpen, setIsOpen] = useState(false);
	const [newBoardTitle, setNewBoardTitle] = useState('');
	//todo use memo for select
	const [newBoardRelated, setNewBoardRelated] = useState('');

	const createBoard = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};


	const pushNewBoard = () => {
		database.ref('boards').push({
			title: newBoardTitle,
			relatedTo: newBoardRelated,
		}).catch(alert);
	};

	console.log(newBoardRelated)

	const {id} = useParams();

	const [loading, workspaces] = useWorkspaces();

	// todo get board id
	const boardId = 'q';

	// tasks.filter()
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
					<input
						className='field__control'
						type='text' placeholder='Название'
						value={newBoardTitle}
						onChange={(e) => setNewBoardTitle(e.target.value)}
					/>
				</div>

				<Dropdown
					value={newBoardRelated}
					onChange={(e: any) => { setNewBoardRelated(e.target.value) }}
					options={workspaces}
				/>
			</Popup>
		</React.Fragment>
	);
};

export {Board};
