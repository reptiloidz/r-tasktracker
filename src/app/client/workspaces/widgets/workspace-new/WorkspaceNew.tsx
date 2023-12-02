import React, {useCallback, useState} from 'react';
import {Button} from "../../../../../shared/ui/button/Button";
import {Popup} from "../../../../../shared/components/popup/Popup";
import {PopupForm} from "../../../../../shared/components/popup-form/PopupForm";
import {database} from "../../../../firebase";

const WorkspaceNew = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [newWorkspaceTitle, setNewWorkspaceTitle] = useState('');
	const [newWorkspaceDescription, setNewWorkspaceDescription] = useState('');

	const newWorkspaceTitleValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNewWorkspaceTitle(e.target.value);
	}

	const newWorkspaceDescriptionValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNewWorkspaceDescription(e.target.value);
	}

	const pushNewWorkspace = useCallback(() => {
		database.ref('workspaces').push({
			title: newWorkspaceTitle,
			description: newWorkspaceDescription,
		}).catch(alert);
	}, [newWorkspaceDescription, newWorkspaceTitle]);

	const createWorkspace = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<React.Fragment>
			<Button
				onClick={createWorkspace}
				className='navbar__btn btn btn--primary btn--xs'
			>
				Создать рабочее пространство
			</Button>

			<Popup
				isOpen={isOpen}
				onCancel={closeModal}
				title='Новое рабочее пространство'
			>
				<PopupForm
					onSubmit={pushNewWorkspace}
				>
					<div className='field'>
						{/*<div className="field__title">*/}
						{/*	Название*/}
						{/*</div>*/}
						<input
							className='field__control'
							type='text'
							placeholder='Название'
							value={newWorkspaceTitle}
							onChange={newWorkspaceTitleValue}
						/>
					</div>
					<div className='field'>
						{/*<div className="field__title">*/}
						{/*	Описание*/}
						{/*</div>*/}
						<input
							className='field__control'
							type='text'
							placeholder='Описание'
							value={newWorkspaceDescription}
							onChange={newWorkspaceDescriptionValue}
						/>
					</div>
				</PopupForm>
			</Popup>
		</React.Fragment>
	);
};

export {WorkspaceNew};
