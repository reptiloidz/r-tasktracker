import React from 'react';
import {NavbarProps} from "./typings";
import {NavLink, NavLinkProps} from "react-router-dom";

const linkClasses: string = 'link';

// TODO: тип isActive
const setActive = ({isActive}: any) => {
	return linkClasses + (isActive ? ' link--active' : '');
};

const Navbar = ({navs}: NavbarProps) => {
	const textCollection = navs.map(
		(nav) =>
			<li key={nav.id}>
				{/*
					link для spa, чтобы не перезагружалась страница
				*/}
				<NavLink
					className={setActive}
					to={nav.link}
				>
					{nav.text}
				</NavLink>
			</li>
	);

	return (
		<ul>
			{textCollection}
		</ul>
	);
};

export {Navbar};