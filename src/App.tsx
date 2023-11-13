import React from 'react';
import './shared/styles/styles.scss';
import {Navigate, Route, RouteProps, Routes} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {WorkspacePage} from "./pages/WorkspacePage";
import {BoardPage} from "./pages/BoardPage";
import {Layout} from "./app/Layout";
import {WorkspaceDetailsPage} from "./pages/WorkspaceDetailsPage";
import {WorkspaceNew} from "./shared/components/workspace-new/WorkspaceNew";
import {WorkspaceEdit} from "./shared/components/workspace-edit/WorkspaceEdit";
import {NotFoundPage} from "./pages/NotFoundPage";
import {publicRoutes} from "./entities/routes";

function App() {
	return (
		<React.StrictMode>
			<Routes>
				<Route path='/' element={<Layout/>}>
					{/*exact по умолчанию*/}
					<Route index element={<HomePage/>}/>
					{
						publicRoutes.map(({path, element}, index) =>
							<Route key={index} path={path} Component={element} />
						)
					}
					{/*TODO не работает element={<element/>}*/}
					{/*<Route path='board/:id' element={<BoardPage/>}/>*/}
					{/*<Route path='workspaces' element={<WorkspacePage/>}/>*/}
					{/*<Route path='workspace/:id' element={<WorkspaceDetailsPage/>}/>*/}
					{/*<Route path='workspace/:id/edit' element={<WorkspaceEdit/>}/>*/}
					{/*<Route path='workspace/new' element={<WorkspaceNew/>}/>*/}
				</Route>

				<Route path='*' element={<NotFoundPage/>}/>
				{/*Если две ссылки ссылаются на один компонент, то используем Navigate*/}
				{/*replace позволяет не записывать в истории браузера переход ч-з Navigate*/}
				<Route path='workspace/new/edit' element={<Navigate to={'*'} replace />}/>
			</Routes>
		</React.StrictMode>
	);
}

const routes: RouteProps[] = [{}]

export {App};
