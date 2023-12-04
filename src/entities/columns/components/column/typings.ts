import {Board} from "../../../boards/components/board/typings";

export interface ColumnProps {
	columns: Column[];
	isLoading: boolean;
}

export type Column = {
	id: string;
	title: string;
	relatedTo?: Board['id'];
}