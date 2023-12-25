import React, { useState } from 'react';
import { WorkspaceProps } from './typings';
import { Link } from 'react-router-dom';
import { Button } from '../../../../shared/ui/button/Button';
import { database } from '../../../../app/firebase';
import { Popup } from '../../../../shared/components/popup/Popup';
import { useBoards } from '../../../../shared/hooks/useBoards';

const Workspace = ({ id, title, description }: WorkspaceProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [, boards] = useBoards();

	const [errText, setErrText] = useState('');
	const deleteWorkspace = async () => {
		const boardCollection = boards.filter(board => id === board.relatedTo?.toString());

		console.log(!!boardCollection.length)

		if (!boardCollection.length) {
			await database.ref(`workspaces/${id}`).set(null).catch(alert);

			return;
		}

		setErrText('Рабочее пространство непустое, сначала удалите все дочение элементы');

		// todo не удалять ws пока не удалены дочерние элементы
		// todo при удалении задач перемещать в какую-то другую колонку
		// todo поставить es-lint
		// deleteTree.map(board => database.ref(`boards/${board.id}`).set(null).catch(alert));
		// deleteBoards.map(board => a.push(board.id));

		// const boardsDelete = boards.filter(board => {
		// 	id === board.relatedTo.toString();
		// });

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
		setErrText('');
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

					{errText &&
						<p>{errText}</p>
					}
					{!errText &&
						<p>Внимание, будет удалено рабочее пространство</p>
					}
				</div>
				<div className="popup__footer">
					<Button className="btn btn--xs btn--secondary" onClick={deleteWorkspace}>
						Удалить
					</Button>
					<Button className="btn btn--xs btn--primary" onClick={closeDeleteDialog}>
						Отмена
					</Button>
				</div>
			</Popup>
		</React.Fragment>
	);
};

export { Workspace };
