import React, {useCallback, useState} from 'react';
import {Button} from "../../ui/button/Button";
import {Popup} from "../../ui/popup/Popup";
import {database} from "../../../entities/firebase";
import {PopupForm} from "../popup-form/PopupForm";

const WorkspaceNew = () => {
	const [isOpen, setIsOpen] = useState(false);


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

				/>
			</Popup>
		</React.Fragment>
	);
};

export {WorkspaceNew};
