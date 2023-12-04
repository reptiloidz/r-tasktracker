import React, {useRef, useState} from 'react';
import {Button} from "../../../../shared/ui/button/Button";
import {Dropdown} from "../../../../shared/ui/dropdown/Dropdown";
import {BoardNewProps} from "./typings";
import {Popup} from "../../../../shared/components/popup/Popup";
import {PopupProps} from "../../../../shared/components/popup/typings";

const BoardNew = ({
	onCancel,
	dropdownValue,
	onDropdownChange,
	dropdownOptions,
	onInputChange,
	onSubmit,
	isOpen,
}: BoardNewProps) => {

	const closeHandler: PopupProps['onCancel'] = (e) => {
		if (onCancel) {
			onCancel(e);
		}
	}

	const submitHandler: BoardNewProps['onSubmit'] = (e) => {
		if (onSubmit) {
			onSubmit(e);
		}
	}

	const dropdownHandler: BoardNewProps['onDropdownChange'] = (e) => {
		if (onDropdownChange) {
			onDropdownChange(e);
		}
	}

	const inputHandler: BoardNewProps['onInputChange'] = (e) => {
		if (onInputChange) {
			onInputChange(e);
		}
	}

	if (!isOpen) return null;

	return (
		<React.Fragment>
			<Popup
				isOpen={isOpen}
				onCancel={closeHandler}
				title='Создать доску'
				rootClass='popup--left'
			>
				<div className="popup__body">
					<div className='field'>
						<input
							className='field__control'
							type='text'
							placeholder='Название'
							onChange={inputHandler}
						/>
					</div>

					<Dropdown
						value={dropdownValue}
						onChange={dropdownHandler}
						options={dropdownOptions}
					/>
				</div>

				<div className="popup__footer">
					<Button
						className='btn btn--primary btn--xs'
						onClick={submitHandler}
						type='submit'
					>
						Создать
					</Button>
				</div>
			</Popup>
		</React.Fragment>
	);
};

export {BoardNew};