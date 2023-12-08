import React from 'react';
import {PageHeaderProps} from "./typings";

const PageHeader = ({
	title,
	children,
}: PageHeaderProps) => {

	return (
		<React.Fragment>
			<div className="header">
				<h2 className='header__title'>
					{title}
				</h2>

				{children}
			</div>
		</React.Fragment>
	);
};

export {PageHeader};