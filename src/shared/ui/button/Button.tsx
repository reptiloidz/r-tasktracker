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
	}

	// classnames
	// bem-classname

	return (
		<button
			title={ title }
			type={ type }
			className={className ? className : ''}
			onClick={ clickHandler }
			{ ...rest }
		>
			{ children }
		</button>
	);
};

export {Button};
