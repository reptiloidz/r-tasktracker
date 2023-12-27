import { useEffect, useState } from 'react';
import { Workspace } from '../../entities/workspaces/components/workspace-collection/typings';
import { getBoards } from '../firebase-context/boards-context';
import {getWorkspaces} from "../firebase-context/workspaces-context";

export const useWorkspaces = (): [boolean, Workspace[], string?] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		getWorkspaces()
			.then(response => {
				setWorkspaces(response);
			})
			.catch(err => {
				setErrorText('Не можем получить доступные рабочие пространства');
				setWorkspaces([]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return [loading, workspaces, errorText];
};
