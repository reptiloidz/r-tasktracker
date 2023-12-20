import React, { useState } from 'react';
import { WorkspaceProps } from './typings';
import { Link } from 'react-router-dom';
import { Button } from '../../../../shared/ui/button/Button';
import { database } from '../../../../app/firebase';
import { Popup } from '../../../../shared/components/popup/Popup';
import {useBoardDetails} from "../../../../shared/hooks/useBoardDetails";
import {useBoards} from "../../../../shared/hooks/useBoards";
import {useColumns} from "../../../../shared/hooks/useColumns";
import {useWorkspaces} from "../../../../shared/hooks/useWorkspaces";

const Workspace = ({ id, title, description }: WorkspaceProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [, boards] = useBoards();
	const [, columns] = useColumns();
	const deleteWorkspace = async () => {
		// await database.ref(`workspaces/${id}`).set(null).catch(alert);

		// const a: string[] = [];
		const deleteTree = boards.filter(board => id === board.relatedTo?.toString());
		// deleteBoards.map(board => a.push(board.id));

		// const boardsDelete = boards.filter(board => {
		// 	id === board.relatedTo.toString();
		// });
		
		
		// boardsDelete.map(board => database.ref(`boards/${board.id}`).set(null).catch(alert));

		// columns
		// 	.filter(columns => id === board.relatedTo.toString())
		// 	.map(board => database.ref(`boards/${board.id}`).set(null).catch(alert));
		// console.log(boardsToDelete)
		// const b = database.ref(`boards`).filter(board => id === board.relatedTo.toString());
		// await database.ref()
		// await database.ref(`boards/${id}`).set(null).catch(alert);
	};

	const openDeleteDialog = () => {
		setIsOpen(true);
	};
	const closeDeleteDialog = () => {
		setIsOpen(false);
	};

	return (
		<React.Fragment>
			<li>
				<div className="widget widget--primary">
					<Button onClick={openDeleteDialog} className="btn btn--xs btn--primary">
						Удалить
					</Button>
					<Link className="widget__title" to={`/workspace/${id}`}>
						{title}
					</Link>

					<span>{id}</span>

					{description && <span className="widget__description">{description}</span>}
					{/*// todo lint*/}
				</div>
			</li>

			<Popup isOpen={isOpen} onCancel={closeDeleteDialog} title="Удалить рабочее пространство?">
				<div className="popup__body">
					<p>
						Внимание, будет удалено рабочее пространство и все элементы, связанные с ним
					</p>
				</div>
				<div className="popup__footer">
					<Button
						className="btn btn--xs btn--secondary"
						onClick={deleteWorkspace}
					>
						Удалить
					</Button>
					<Button
						className="btn btn--xs btn--primary"
						onClick={closeDeleteDialog}
					>
						Отмена
					</Button>
				</div>
			</Popup>
		</React.Fragment>
	);
};

export { Workspace };
