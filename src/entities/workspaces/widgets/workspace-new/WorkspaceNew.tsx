import React, { useState } from 'react';
import { Button } from '../../../../shared/ui/button/Button';
import { Popup } from '../../../../shared/components/popup/Popup';
import { PopupForm } from '../../../../shared/components/popup-form/PopupForm';
import { database } from '../../../../app/firebase';
import { useValidationInput } from '../../../../shared/hooks/useValidationInput';

const WorkspaceNew = () => {
	const [isOpen, setIsOpen] = useState(false);

	const [newWorkspaceTitle, setNewWorkspaceTitle] = useState('');
	const [newWorkspaceDescription, setNewWorkspaceDescription] = useState('');

	const workspaceTitleValidate = useValidationInput('', { isEmpty: true, minLength: 3 });

	const newWorkspaceTitleValue: React.ChangeEventHandler<HTMLInputElement> = e => {
		setNewWorkspaceTitle(e.target.value);

		workspaceTitleValidate.onChange(e);
	};

	const newWorkspaceTitleOnblur = (e: React.FocusEvent<HTMLInputElement>) => {
		workspaceTitleValidate.onBlur(e);
	};

	const newWorkspaceDescriptionValue: React.ChangeEventHandler<HTMLInputElement> = e => {
		setNewWorkspaceDescription(e.target.value);
	};
	const createWorkspace = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);

		setNewWorkspaceDescription('');
	};

	const pushNewWorkspace: React.MouseEventHandler<HTMLButtonElement> = async e => {
		e.preventDefault();

		await database
			.ref('workspaces')
			.push({
				title: newWorkspaceTitle,
				description: newWorkspaceDescription,
			})
			.catch(alert);

		closeModal();

		setNewWorkspaceTitle('');
		setNewWorkspaceDescription('');
	};

	return (
		<React.Fragment>
			<Button onClick={createWorkspace} className="navbar__btn btn btn--primary btn--xs">
				Создать рабочее пространство
			</Button>

			<Popup isOpen={isOpen} onCancel={closeModal} title="Новое рабочее пространство">
				<PopupForm onSubmit={pushNewWorkspace} isDisabledSubmit={!workspaceTitleValidate.inputValid}>
					<div className="field">
						{/*<div className="field__title">*/}
						{/*	Название*/}
						{/*</div>*/}
						<input
							className="field__control"
							type="text"
							name="newWorkspaceTitle"
							placeholder="Название"
							value={workspaceTitleValidate.value}
							onChange={newWorkspaceTitleValue}
							onBlur={newWorkspaceTitleOnblur}
						/>
					</div>

					{workspaceTitleValidate.isDirty && workspaceTitleValidate.isEmpty && (
						<p>{/*{workspaceTitleValidate.error}*/}</p>
					)}

					{workspaceTitleValidate.isDirty && workspaceTitleValidate.minLength && (
						<p>{/*{workspaceTitleValidate.error}*/}</p>
					)}

					<div className="field">
						{/*<div className="field__title">*/}
						{/*	Описание*/}
						{/*</div>*/}
						<input
							className="field__control"
							type="text"
							placeholder="Описание"
							value={newWorkspaceDescription}
							onChange={newWorkspaceDescriptionValue}
						/>
					</div>
				</PopupForm>
			</Popup>
		</React.Fragment>
	);
};

export { WorkspaceNew };
