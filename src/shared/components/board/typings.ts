export type A = {}
export interface BoardProps {
	tasks: Task[],
}

export type Task = {
	id: string;
	title: string;
	description?: string;
}
