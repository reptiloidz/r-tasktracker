import { Workspace } from '../workspace-collection/typings';

export interface WorkspaceProps {
	id?: Workspace['id'];
	title: Workspace['title'];
	description?: Workspace['description'];
}
