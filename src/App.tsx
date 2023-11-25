import React from 'react';
import './shared/styles/styles.scss';
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {Layout} from './app/Layout';
import {NotFoundPage} from './pages/NotFoundPage';
import {publicRoutes} from './entities/routes';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout/>}>
				{/*exact по умолчанию*/}
				<Route index element={<HomePage/>}/>
				{
					publicRoutes.map(({path, element}, index) =>
						<Route key={index} path={path} Component={element} />
					)
				}
			</Route>

			<Route path='*' element={<NotFoundPage/>}/>
			{/*<Route path='workspace/new/edit' element={<NotFoundPage/>}/>*/}
			{/*Если две ссылки ссылаются на один компонент, то используем Navigate*/}
			{/*replace позволяет не записывать в истории браузера переход ч-з Navigate*/}
			<Route path='workspace/new/edit' element={<Navigate to={'*'} replace />}/>
		</Routes>
	);
}

export {App};
