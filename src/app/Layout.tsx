import React, {useState} from 'react';
import {NavsData} from '../typings';
import {Navbar} from '../shared/ui/navbar/Navbar';
import {Outlet} from 'react-router-dom';
import {Button} from '../shared/ui/button/Button';
import {Popup} from '../shared/ui/popup/Popup';
import {database} from "../entities/firebase";

const Layout = () => {

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
			<div className='row'>
				<div className='md:col-4'>
					<Navbar
						navs={NavsData}
					/>

					<hr className='hr' />

					<div className='container'>
						<Button
							onClick={createWorkspace}
							className='navbar__btn btn btn--primary btn--xs'
						>Создать рабочее пространство</Button>
					</div>
				</div>

				<div className='md:col-8'>
					<Outlet/>
				</div>
			</div>

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
			{/*<footer>footer</footer>*/}
		</React.Fragment>
	);
};

export {Layout};