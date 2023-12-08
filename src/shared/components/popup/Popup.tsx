import React from 'react';
import {Button} from "../../ui/button/Button";
import {PopupProps} from "./typings";

const Popup = ({
	title,
	isOpen = false,
	children,
	onCancel,
	rootClass,
}: PopupProps) => {

	const cancelHandler: PopupProps['onCancel'] = (e) => {
		if (onCancel) {
			onCancel(e);
		}
	};

	// const popupRef = useRef<any>(null);

	// useEffect(() => {
	// 	if (!isOpen) return;
	//
	// 	const clickHandler = (e: any) => {
	// 		console.log(popupRef.current.contains(e.target))
	// 		console.log(e.target)
	// 		// console.log(popupRef.current)
	// 		if (!popupRef.current) return;
	//
	// 		if (!popupRef.current.contains(e.target) ) {
	// 			cancelHandler(e)
	// 		}
	// 	}
	//
	// 	document.addEventListener('click', clickHandler);
	//
	// 	return () => {
	// 		document.removeEventListener('click',clickHandler);
	// 	};
	// }, [isOpen]);

	if (!isOpen) return null;

	return (
		<React.Fragment>
			<div
				className={rootClass ? 'popup ' + rootClass : 'popup'}
			>
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
		</React.Fragment>
	);
};

export {Popup};
