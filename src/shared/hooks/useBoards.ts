import { Board } from '../../entities/boards/components/board-collection/typings';
import { useEffect, useState } from 'react';
import { database } from '../../app/firebase';
import {getBoards} from "../firebase-context/boards-context";

export const useBoards = (): [boolean, Board[], string?] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [boards, setBoards] = useState<Board[]>([]);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		getBoards()
			.then((response) => {
				setBoards(response);
			})
			.catch((err) => {
				setErrorText('Не можем получить доступные доски')
				setBoards([]);
			})
			.finally(() => {
				setLoading(false);
			})
	}, []);

	return [loading, boards, errorText];
};
