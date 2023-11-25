import {Workspace} from "../workspace/typings";

export interface BoardProps {
	boards: OneBoard[],
	isLoading: boolean;
}

export type OneBoard = {
	id: string;
	title: string;
	relatedTo?: Workspace['id'];
}
