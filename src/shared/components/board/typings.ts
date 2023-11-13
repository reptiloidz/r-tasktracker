import {Workspace} from "../workspace/typings";

export interface BoardProps {
	tasks: Task[],
}

export type Task = {
	id: string;
	title: string;
	description?: string;
	relatedTo: Workspace['id'];
}
