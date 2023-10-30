import React from 'react';
import './shared/styles/styles.scss';
import {Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import WorkspacePage from "./pages/WorkspacePage";
import BoardsPage from "./pages/BoardsPage";
import Navbar from "./shared/ui/navbar/Navbar";

function App() {

	// const routes = useRoutes([])
	return (
		<div>
			<Navbar
				props={[
					{
						link: '/',
						text: 'home'
					},
					{
						link: '/board',
						text: 'board'
					},
					{
						link: '/workspace',
						text: 'workspace'
					},
				]}
			/>

			<Routes>
				<Route path='/' Component={HomePage}/>
				<Route path='/board' Component={BoardsPage}/>
				<Route path='/workspace' Component={WorkspacePage}/>
			</Routes>
		</div>
	);
}

export default App;
