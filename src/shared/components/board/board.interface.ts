export interface BoardProps {
	tasks: Array<Task>, // todo: any
}

export type Task = {
	id: string;
	title: string;
	description?: string;
}
