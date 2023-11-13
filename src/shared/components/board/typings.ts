import {Workspaces} from "../workspace/typings";

export interface BoardProps {
	tasks: Task[],
}

export type Task = {
	id: string;
	title: string;
	description?: string;
	relatedTo: string;
}
