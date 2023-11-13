import React from 'react';
import {BtnProps} from "./typings";

const Button = ({
	title,
	type,
	className,
	children, ...rest
}: BtnProps) => {

	const clickHandler = () => {
		console.log('btn');
	}

	// classnames
	// bem-classname

	return (
		<button
			title={title}
			type={type ? type : 'button'}
			className={'btn' + (className ? ' ' + className : '')}
			onClick={clickHandler}
			{...rest}
		>
			{children}
		</button>
	);
};

export {Button};
