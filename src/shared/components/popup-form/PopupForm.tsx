import React from 'react';
import { Button } from '../../ui/button/Button';
import { PopupFormProps } from './typings';

const PopupForm = ({ children, onSubmit, isDisabledSubmit }: PopupFormProps) => {
	const submitHandler: PopupFormProps['onSubmit'] = e => {
		if (onSubmit) {
			onSubmit(e);
		}
	};

	return (
		<form className="popup__content">
			<div className="popup__body">{children}</div>
			<div className="popup__footer">
				<Button
					className="btn btn--primary btn--xs"
					onClick={submitHandler}
					type="submit"
					disabled={isDisabledSubmit}
				>
					Создать
				</Button>
			</div>
		</form>
	);
};

export { PopupForm };
