import { getPromiseFactory } from './promise-factory';
import { Board } from '../../entities/boards/components/board-collection/typings';

export const getBoards = async () => {
	const boardsData = (
		await getPromiseFactory<Board[]>({
			databaseUrl: '/boards',
		})
	) as Board[];

	return Object.keys(boardsData).map((key: any) => {
		return {
			key,
			id: key,
			title: boardsData[key].title,
			relatedTo: boardsData[key].relatedTo,
		};
	});
};

// const b: CheckNumber<3> = '123'
//
// export type CheckNumber<NumberVariable> = NumberVariable extends 3
//     ? 'true'
//     : 'false';
