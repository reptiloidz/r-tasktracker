import { Board } from '../../entities/boards/components/board-collection/typings';
import {useCallback, useEffect, useState} from 'react';
import { database } from '../../app/firebase';

export const useBoardDetails = (id?: string): Board => {
	const [boardSelected, setBoardSelected] = useState<any>([]);

	// todo правильно ли
	const fetchBoardsDetails = useCallback(async () => {
		database.ref(`/boards/${id}`).on('value', snapshot => {
			const boardDataSelected = snapshot.val();

			setBoardSelected(boardDataSelected);
		});
	}, [id]);

	useEffect(() => {
		fetchBoardsDetails().then();
	}, [fetchBoardsDetails]);

	return boardSelected;
};
