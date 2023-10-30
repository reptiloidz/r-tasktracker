import React from 'react';
import {NavbarInterface} from "./navbar.interface";

const Navbar = ({props}: NavbarInterface) => {
	const textCollection = props.map(
		(item: { link: string; text: string | number, id: string }, index: number) =>
		<li>
			<a
				className='link'
				key={index}
				href={item.link}
			>
				{item.text}
			</a>
		</li>
	);

	return (
		<ul>
			{textCollection}
		</ul>
	);
};

export default Navbar;