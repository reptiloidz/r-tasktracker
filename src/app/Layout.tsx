import React from 'react';
import {NavsData} from "../typings";
import {Navbar} from "../shared/ui/navbar/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<React.Fragment>
			<Navbar
				navs={NavsData}
			/>

			<Outlet />
			<footer>footer</footer>
		</React.Fragment>
	);
};

export {Layout};