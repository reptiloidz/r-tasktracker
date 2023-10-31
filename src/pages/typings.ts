import {Workspaces} from "../shared/components/workspace/typings";
import {Task} from "../shared/components/board/typings";

export const WorkspaceData: Workspaces[] = [
	{
		id: 'asa',
		link: '/board',
		text: 'Рабочее пространство 1',
	},
	{
		id: 'asas',
		link: '/board',
		text: 'Рабочее пространство 2',
	},
	{
		id: 'asasa',
		link: '/board',
		text: 'Рабочее пространство 3',
	},
];

export const BoardsData: Task[] = [
	{
		id: '1',
		title: 'Доска 1'
	},
	{
		id: '2',
		title: 'Доска 2'
	},
	{
		id: '3',
		title: 'Доска 3'
	}
];