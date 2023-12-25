import { Board } from '../../entities/boards/components/board-collection/typings';
import { useEffect, useState } from 'react';
import { database } from '../../app/firebase';
import {getBoards} from "../firebase-context/data-context";

export const useBoards = (): [boolean, Board[]] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [boards, setBoards] = useState<Board[]>([]);

	useEffect(() => {
		getBoards()
			.then((response) => {
				setBoards(response);
			})
			.catch((err) => {
				setBoards([]);
			})
			.finally(() => {
				setLoading(false);
			})
	}, []);

	return [loading, boards];
};
