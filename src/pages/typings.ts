import {Workspace} from "../shared/components/workspace/typings";
import {Task} from "../shared/components/board/typings";

export const WorkspaceData: Workspace[] = [
	{
		id: 1,
		title: 'Рабочее пространство 1',
		userId: 1,
		description: 'Содержание доски'
	},
	{
		id: 2,
		title: 'Рабочее пространство 2',
		userId: 1,
		description: 'Содержание доски'
	},
	{
		id: 3,
		title: 'Рабочее пространство 3',
		userId: 1,
		description: 'Содержание доски'
	},
];

export const BoardData: Task[] = [
	{
		id: 'd1',
		title: 'Доска 1',
		relatedTo: 1,
	},
	{
		id: 'd2',
		title: 'Доска 2',
		relatedTo: 2,
	},
	{
		id: 'd3',
		title: 'Доска 3',
		relatedTo: 1,
	}
];
