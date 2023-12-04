import {Workspace} from "../../../workspaces/components/workspace/typings";

export interface BoardProps {
	boards: Board[];
	isLoading: boolean;
}

export type Board = {
	id: string;
	title: string;
	relatedTo?: Workspace['id'];
}
