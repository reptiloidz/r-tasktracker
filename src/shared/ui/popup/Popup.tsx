import React from 'react';
import {Button} from "../button/Button";
import {PopupProps} from "./typings";

const Popup = ({
	title,
	onSubmitText,
	isOpen,
	onSubmit,
	children,
	onCancel,
}: PopupProps) => {

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
									onClick={onSubmit}
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

export {Popup};