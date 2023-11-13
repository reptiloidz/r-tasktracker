import React from 'react';
import {BtnProps} from "./typings";

const Button = ({
	title,
	type = 'button',
	className,
	children,
	onClick,
	...rest
}: BtnProps) => {
	const clickHandler: BtnProps['onClick'] = (e) => {
		if (onClick) {
			onClick(e);
		}
		console.log('btn');
	}

	// classnames
	// bem-classname

	return (
		<button
			title={ title }
			type={ type }
			className={'btn' + (className ? ' ' + className : '')}
			onClick={ clickHandler }
			{ ...rest }
		>
			{ children }
		</button>
	);
};

export {Button};
