import { getPromiseFactory } from './promise-factory';
import { Board } from '../../entities/boards/components/board-collection/typings';
import { Workspace } from '../../entities/workspaces/components/workspace-collection/typings';

export const getWorkspaces = async () => {
	const workspacesData = (await getPromiseFactory<Workspace[]>({
		databaseUrl: '/workspaces',
	})) as Workspace[];

	return Object.keys(workspacesData).map((key: any) => {
		return {
			key,
			id: key,
			title: workspacesData[key].title,
			description: workspacesData[key].description,
		};
	});
};
