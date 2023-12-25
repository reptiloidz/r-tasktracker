import { Workspace } from '../../entities/workspaces/components/workspace-collection/typings';
import { useEffect, useState } from 'react';
import { database } from '../../app/firebase';

export const useWorkspaceDetails = (id?: string): Workspace => {
	const [workspaceSelected, setWorkspaceSelected] = useState<any>([]);

	useEffect(() => {
		database.ref(`/workspaces/${id}`).on('value', snapshot => {
			const workspaceDataSelected = snapshot.val();

			if (workspaceDataSelected) {
				setWorkspaceSelected(workspaceDataSelected);
			}

			return null;
		});
	}, [id]);

	return workspaceSelected;
};
