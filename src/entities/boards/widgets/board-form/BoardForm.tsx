import React from 'react';
import { Dropdown } from '../../../../shared/ui/dropdown/Dropdown';
import { BoardFormProps } from './typings';
import { Popup } from '../../../../shared/components/popup/Popup';
import { PopupForm } from '../../../../shared/components/popup-form/PopupForm';

const BoardForm = ({
	onCancel,
	dropdownValue,
	onDropdownChange,
	dropdownOptions,
	onInputChange,
	onSubmit,
	isOpen,
}: BoardFormProps) => {
	const closeHandler: BoardFormProps['onCancel'] = e => {
		if (onCancel) {
			onCancel(e);
		}
	};

	const submitHandler: BoardFormProps['onSubmit'] = e => {
		if (onSubmit) {
			onSubmit(e);
		}
	};

	const dropdownHandler: BoardFormProps['onDropdownChange'] = e => {
		if (onDropdownChange) {
			onDropdownChange(e);
		}
	};

	const inputHandler: BoardFormProps['onInputChange'] = e => {
		if (onInputChange) {
			onInputChange(e);
		}
	};

	if (!isOpen) return null;

	return (
		<React.Fragment>
			<Popup isOpen={isOpen} onCancel={closeHandler} title="Создать доску" rootClass="popup--right">
				<PopupForm onSubmit={submitHandler}>
					<div className="field">
						<input className="field__control" type="text" placeholder="Название" onChange={inputHandler} />
					</div>

					<Dropdown value={dropdownValue} onChange={dropdownHandler} options={dropdownOptions} />
				</PopupForm>
			</Popup>
		</React.Fragment>
	);
};

export { BoardForm };
