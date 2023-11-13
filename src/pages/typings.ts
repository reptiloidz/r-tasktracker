import {Workspaces} from "../shared/components/workspace/typings";
import {Task} from "../shared/components/board/typings";

export const WorkspaceData: Workspaces[] = [
	{
		id: 'w1',
		text: 'Рабочее пространство 1',
	},
	{
		id: 'w2',
		text: 'Рабочее пространство 2',
	},
	{
		id: 'w3',
		text: 'Рабочее пространство 3',
	},
];

export const BoardData: Task[] = [
	{
		id: 'd1',
		title: 'Доска 1',
		relatedTo: 'w1',
	},
	{
		id: 'd2',
		title: 'Доска 2',
		relatedTo: 'w2',
	},
	{
		id: 'd3',
		title: 'Доска 3',
		relatedTo: 'w3',
	}
];