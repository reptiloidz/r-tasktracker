import React from 'react';
import {NavbarProps} from "./typings";

const Navbar = ({ navs }: NavbarProps) => {
	const textCollection = navs.map(
		(nav) =>
			<li>
				<a
					className='link'
					key={nav.id}
					href={nav.link}
				>
					{nav.text}
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