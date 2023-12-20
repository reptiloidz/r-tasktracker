import { Board } from '../board-collection/typings';

export interface BoardProps {
	id?: Board['id'];
	title: Board['title'];
}

// export type Board = {
// 	id: string;
// 	title: string;
// 	relatedTo: string;
// };
