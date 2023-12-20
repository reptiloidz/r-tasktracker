import React, { useState } from 'react';
import { Button } from '../../../../shared/ui/button/Button';
import { BoardForm } from '../board-form/BoardForm';
import { database } from '../../../../app/firebase';
import { BoardNewProps } from './typings';

const BoardNew = ({ workspaces, idWorkspace }: BoardNewProps) => {
	const [newBoardTitle, setNewBoardTitle] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [newBoardRelated, setNewBoardRelated] = useState(idWorkspace);

	const createBoard = () => {
		setIsOpen(true);
	};

	const closePopup = () => {
		setIsOpen(false);
	};

	const newBoardWorkspace: BoardNewProps['onDropdownChange'] = e => {
		setNewBoardRelated(e.target.value);
	};

	const newBoardHeading: BoardNewProps['onInputChange'] = e => {
		setNewBoardTitle(e.target.value);
	};

	const pushNewBoard: React.MouseEventHandler<HTMLButtonElement> = async e => {
		e.preventDefault();

		await database
			.ref('boards')
			.push({
				title: newBoardTitle,
				relatedTo: newBoardRelated,
			})
			.catch(alert);

		closePopup();
	};

	return (
		<div style={{ display: 'flex' }}>
			<Button className="btn btn--primary btn--xs" onClick={createBoard}>
				Создать доску
			</Button>

			<BoardForm
				isOpen={isOpen}
				onCancel={closePopup}
				dropdownValue={newBoardRelated}
				dropdownOptions={workspaces}
				onDropdownChange={newBoardWorkspace}
				onSubmit={pushNewBoard}
				onInputChange={newBoardHeading}
			/>
		</div>
	);
};

export { BoardNew };
