import React from 'react';
import { NavbarProps } from './typings';
import { NavLink } from 'react-router-dom';

const linkClasses: string = 'navbar__link link';

const setActive = ({ isActive }: { isActive: boolean }) => {
	return linkClasses + (isActive ? ' link--active' : '');
};

const Navbar = ({ navs }: NavbarProps) => {
	const textCollection = navs.map(nav => (
		<li className="navbar__item" key={nav.id}>
			{/*
					link для spa, чтобы не перезагружалась страница
				*/}
			<NavLink className={setActive} to={nav.link}>
				<span className="link__text">
					{nav.text}
				</span>
			</NavLink>
		</li>
	));

	return <ul className="navbar__list container">{textCollection}</ul>;
};

export { Navbar };
