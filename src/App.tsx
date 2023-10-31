import React from 'react';
import './shared/styles/styles.scss';
import {Route, RouteProps, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import WorkspacePage from "./pages/WorkspacePage";
import BoardsPage from "./pages/BoardsPage";
import Navbar from "./shared/ui/navbar/Navbar";
import {NavsData} from "./typings";

function App() {

	// const routes = useRoutes([])
	return (
		<div>
			<Navbar
				navs={NavsData}
			/>

			<Routes>
				<Route path='/' Component={HomePage} />
				<Route path='/board' Component={BoardsPage} />
				<Route path='/workspaces' Component={WorkspacePage} />
				<Route path='/workspace/:id' Component={WorkspacePage} />
			</Routes>
		</div>
	);
}

const routes: RouteProps[] = [{

}]

export default App;
