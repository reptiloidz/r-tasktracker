import { useEffect, useState } from 'react';
import { database } from '../../app/firebase';
import { Workspace } from '../../entities/workspaces/components/workspace-collection/typings';

export const useWorkspaces = (): [boolean, Workspace[]] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

	useEffect(() => {
		database.ref('/workspaces').on('value', snapshot => {
			// todo правильно ли
			const workspacesData = snapshot.val();
			// console.log(snapshot.val())

			if (workspacesData) {
				const workspaceList = Object.keys(workspacesData).map(key => {
					return {
						key,
						id: key,
						title: workspacesData[key].title,
						description: workspacesData[key].description,
					};
				});
				setWorkspaces(workspaceList);
			}

			setLoading(false); // success | error | initial сделать варианты

			return null;
		});
	}, []);

	return [loading, workspaces];
};
