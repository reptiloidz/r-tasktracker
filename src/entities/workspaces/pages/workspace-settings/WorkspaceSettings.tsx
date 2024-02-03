import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../../../shared/ui/button/Button';
import { PageHeader } from '../../../../shared/components/page-header/PageHeader';
import {Popup} from "../../../../shared/components/popup/Popup";
import {useBoards} from "../../../../shared/hooks/useBoards";
import {database} from "../../../../app/firebase";
import {useWorkspaceDetails} from "../../../../shared/hooks/useWorkspaceDetails";

const WorkspaceSettings = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const workspaceDetails = useWorkspaceDetails(id);
	const [, boards] = useBoards();
	const [workspaceDeleteValue, setWorkspaceDeleteValue] = useState('');
	const [workspaceTitleValue, setWorkspaceTitleValue] = useState('');
	const [workspaceDescriptionValue, setWorkspaceDescriptionValue] = useState('');
	const [workspaceDataForm, setWorkspaceDataForm] = useState(false);

	useEffect(() => {
		setWorkspaceTitleValue(workspaceDetails.title);
		setWorkspaceDescriptionValue(workspaceDetails.description || '');
		// todo при обновлении теряется значение инпута

		console.log(workspaceTitleValue, workspaceDescriptionValue)
	}, [workspaceTitleValue, workspaceDescriptionValue]);

	const deleteWorkspace = async () => {
		// todo пока можно удалять только пустые, реализовать функцию удаления с перемещением досок в архив
		const boardCollection = boards.filter(board => id === board.relatedTo?.toString());

		console.log(!boardCollection.length);

		if (!boardCollection.length && workspaceDeleteValue === workspaceDetails.title) {
			await database.ref(`workspaces/${id}`).set(null).catch(alert);

			closeDeleteDialog();

			navigate('/workspaces');
		}

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

	const workspaceDelete: React.ChangeEventHandler<HTMLInputElement> = e => {
		setWorkspaceDeleteValue(e.target.value);
	};

	const workspaceTitle: React.ChangeEventHandler<HTMLInputElement> = e => {
		setWorkspaceTitleValue(e.target.value);
	};

	const workspaceDescription: React.ChangeEventHandler<HTMLInputElement> = e => {
		setWorkspaceDescriptionValue(e.target.value);
	};

	const openWorkspaceForm = () => {
		setWorkspaceDataForm(true);
	};

	const cancelChanges = () => {
		setWorkspaceDataForm(false);
	};

	const openDeleteDialog = () => {
		setIsOpen(true);
	};
	const closeDeleteDialog = () => {
		setIsOpen(false);
	};

	const goBack = () => navigate(-1);

	const saveChanges = () => {
		console.log('saved');
		goBack();
	};

	return (
		<React.Fragment>
			<PageHeader title={`Настройки рабочего пространства ${workspaceDetails.title} ${id}`}>
				<Button className="header__btn btn btn--primary btn--xs" onClick={openWorkspaceForm}>
					✎
				</Button>
				<Button className="header__btn btn btn--primary btn--xs" onClick={goBack}>
					Назад
				</Button>
			</PageHeader>

			{workspaceDataForm &&
				<form>
					<div className="field">
						<input
							className="field__control"
							type="text"
							placeholder="Название"
							value={workspaceTitleValue}
							onChange={workspaceTitle}
						/>
					</div>

					<div className="field">
						<input
							className="field__control"
							type="text"
							placeholder="Описание"
							value={workspaceDescriptionValue}
							onChange={workspaceDescription}
						/>
					</div>

					<Button
						className="btn btn--primary btn--xs"
						onClick={saveChanges}
					>
						Сохранить
					</Button>

					<Button className="btn btn--primary btn--xs" onClick={cancelChanges}>
						Х
					</Button>
				</form>
			}

			<Button onClick={openDeleteDialog} className="btn btn--xs btn--primary">
				Удалить
			</Button>

			<Popup isOpen={isOpen} onCancel={closeDeleteDialog} title="Удалить рабочее пространство?">
				<div className="popup__body">
					<h4>Обратите внимание</h4>
					<ul>
						<li>Действие нельзя отменить</li>
						<li>Все доски рабочего пространства будут закрыты</li>
						<li>Администраторы могут открыть их заново</li>
						<li>Участники не смогут использовать закрытые доски</li>
					</ul>

					<p>Чтобы удалить рабочее пространство <strong>&laquo;{workspaceDetails.title}&raquo;</strong>, введите его название</p>
					<div className="field">
						<input
							className="field__control"
							type="text"
							value={workspaceDeleteValue}
							onChange={workspaceDelete}
						/>
						{/*todo возможно надо засунуть в валидацию*/}
					</div>
				</div>

				<div className="popup__footer">
					<Button
						className="btn btn--xs btn--secondary"
						onClick={deleteWorkspace}
						disabled={workspaceDeleteValue !== workspaceDetails.title}
					>
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

export { WorkspaceSettings };
