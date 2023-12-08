import React from 'react';
import {NavsData} from '../typings';
import {Navbar} from '../shared/components/navbar/Navbar';
import {Outlet} from 'react-router-dom';
import {WorkspaceNew} from "../entities/workspaces/widgets/workspace-new/WorkspaceNew";

const Layout = () => {
	return (
		<React.Fragment>
			<div className='row' style={{height: '100%'}}>
				<div className='md:col-4 navbar'>
					<Navbar
						navs={NavsData}
					/>

					<hr className='hr' />

					<div className='container'>
						<WorkspaceNew/>
					</div>
				</div>

				<div className='md:col-8'>
					<div style={{overflowX: 'auto', height: '100%'}}>
						<Outlet/>
					</div>
				</div>
			</div>
			{/*<footer>footer</footer>*/}
		</React.Fragment>
	);
};

export {Layout};