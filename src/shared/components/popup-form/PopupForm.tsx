import React, {useCallback, useState} from 'react';
import {Button} from "../../ui/button/Button";
import {database} from "../../../entities/firebase";

const PopupForm = () => {
	const [newWorkspaceTitle, setNewWorkspaceTitle] = useState('');
	const [newWorkspaceDescription, setNewWorkspaceDescription] = useState('');

	const pushNewWorkspace = useCallback(() => {
		database.ref('workspaces').push({
			title: newWorkspaceTitle,
			description: newWorkspaceDescription,
		}).catch(alert);
	}, [newWorkspaceDescription, newWorkspaceTitle]);

	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNewWorkspaceTitle(e.target.value)
	}

	return (
		<form className="popup__content">
			<div className="popup__body">
				<div className='field'>
					{/*<div className="field__title">*/}
					{/*	Название*/}
					{/*</div>*/}
					<input
						className='field__control'
						type='text'
						placeholder='Название'
						value={newWorkspaceTitle}
						onChange={changeHandler}
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
			</div>

			<div className="popup__footer">
				<Button
					className='btn btn--primary btn--xs'
					onClick={pushNewWorkspace}
					type='submit'
				>
					Создать
				</Button>
			</div>
		</form>
	);
};

export {PopupForm};