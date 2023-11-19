import React, {useState} from 'react';
import {Button} from "../../ui/button/Button";
import {Popup} from "../../ui/popup/Popup";
import {database} from "../../../entities/firebase";

const WorkspaceNew = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [newWorkspaceTitle, setNewWorkspaceTitle] = useState('');
	const [newWorkspaceDescription, setNewWorkspaceDescription] = useState('');

	const createWorkspace = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};



	const pushNewWorkspace = () => {
		database.ref('workspaces').push({
			title: newWorkspaceTitle,
			description: newWorkspaceDescription,
		}).catch(alert);
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
				onSubmit={pushNewWorkspace}
				onSubmitText='Создать'
				title='Новое рабочее пространство'
			>
				<div className='field'>
					{/*<div className="field__title">*/}
					{/*	Название*/}
					{/*</div>*/}
					<input
						className='field__control'
						type='text' placeholder='Название'
						value={newWorkspaceTitle}
						onChange={(e) => setNewWorkspaceTitle(e.target.value)}
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
						onChange={(e) => setNewWorkspaceDescription(e.target.value)}
					/>
				</div>
			</Popup>
		</React.Fragment>
	);
};

export {WorkspaceNew};