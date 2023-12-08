import {Board} from "../../../boards/components/board-collection/typings";

export interface ColumnProps {
	column: Column[];
	isLoading: boolean;
}

export type Column = {
	id?: string;
	title: string;
	relatedTo?: Board['id'];
}