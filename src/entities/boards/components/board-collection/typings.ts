import { Workspace } from '../../../workspaces/components/workspace-collection/typings';

export interface BoardProps {
	boards: Board[];
	isLoading: boolean;
}

export type Board = {
	id: string;
	title: string;
	relatedTo: Workspace['id'];
	key: string;
};
