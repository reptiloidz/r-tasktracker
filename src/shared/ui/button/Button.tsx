import React from 'react';
import {ButtonComponentProps} from "./button.interface";

const Button = (
	{
		title,
		type,
		btnText,
		btnClass,
		props,
	}: ButtonComponentProps
) => {
	const clickHandler = () => {
		console.log('btn');
	}

	return (
		<button
			title={title}
			type={type ? type : 'button'}
			{...props}
			className={'btn' + (btnClass ? ' ' + btnClass : '')}
			onClick={clickHandler}
		>{btnText}</button>
	);
};

export default Button;