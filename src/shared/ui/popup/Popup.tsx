import React from 'react';
import {Button} from "../button/Button";
import {PopipProps, PopupProps} from "./typings";

const Popup = ({
	title,
	isOpen = false,
	onSubmit,
	children,
	onCancel,
}: PopupProps) => {

	const cancelHandler: PopupProps['onCancel'] = (e) => {
		if (onCancel) {
			onCancel(e);
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
								onClick={cancelHandler}
							>
								Закрыть
							</Button>
						</div>
						{children}
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
