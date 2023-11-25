import React from 'react';
import {Button} from "../button/Button";
import {PopipProps, PopupProps} from "./typings";

const Popup = ({
	title,
	onSubmitText,
	isOpen = false,
	onSubmit,
	children,
	onCancel,
	isDisabled = false,
}: PopupProps) => {

	const submitHandler = () => {
		// ...
		if (onSubmit) {

		}
	}

	return (
		<React.Fragment>
			{isOpen &&
				<div className='popup'>
					<div className="popup__dialog">
						<div className="popup__header">
							<h2 className="popup__title">
								{title}
							</h2>
							<Button
								className='popup__btn btn btn--primary btn--xs'
								onClick={onCancel}
							>
								Закрыть
							</Button>
						</div>

						<form className="popup__content">
							<div className="popup__body">
								{children}
							</div>

							<div className="popup__footer">
								<Button
									className='btn btn--primary btn--xs'
									onClick={submitHandler}
									type='submit'
									disabled={isDisabled}
								>
									{onSubmitText}
								</Button>
							</div>
						</form>
					</div>
				</div>
			}
		</React.Fragment>
	);
};

// деструктуризация, спреды
export const Popip = ({
	buttonProps,
	title,
	...props
}: PopipProps) => {


	console.log(props);

	return <div />
}

const Component = () => {
	const buttonProps = {
		onCancel: () => {}
	}

	return (
		<Popip buttonProps={ buttonProps } title='sdf' />
	)
}

export {Popup};
