import React, {useState} from 'react';
import {BoardProps, OneBoard} from "./typings";
import {Button} from "../../ui/button/Button";
import {Link, useParams} from "react-router-dom";
import {Popup} from "../../ui/popup/Popup";
import {database} from "../../../entities/firebase";
import {Dropdown} from "../../ui/dropdown/Dropdown";
import {useWorkspaces} from "../../../entities/useWorkspaces";

//  uuid
const Board = ({boards, isLoading}: BoardProps) => {

	const {id} = useParams();

	const [isOpen, setIsOpen] = useState(false);
	const [newBoardTitle, setNewBoardTitle] = useState('');
	const [newBoardRelated, setNewBoardRelated] = useState(id);

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

	const [loading, workspaces] = useWorkspaces();

	// todo get board id
	const boardId = 'q';

	// boards.filter()
	const boardCollection = boards.map(
		(board) =>
			id === board.relatedTo?.toString() ?
				(
					<li
						key={board.id}
						/* key пишем у обертки итерируемого эл-та,
						* иначе ошибка child in a list should have a unique "key" prop. */
					>
						<Link
							className='desk'
							to={`/board/${boardId}`}
						>
							<h3>
								{board.title}
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
				title='Новая доска'
			>
				<form className="popup__content">
					<div className="popup__body">
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
							onChange={(e: any) => {
								setNewBoardRelated(e.target.value)
							}}
							options={workspaces}
						/>
					</div>
					<div className="popup__footer">
						<Button
							className='btn btn--primary btn--xs'
							onClick={pushNewBoard}
							type='submit'
						>
							Создать
						</Button>
					</div>
				</form>
			</Popup>
		</React.Fragment>
	);
};

export {Board};
