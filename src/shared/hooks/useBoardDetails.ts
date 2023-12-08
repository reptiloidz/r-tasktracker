import {Board} from "../../entities/boards/components/board-collection/typings";
import {useEffect, useState} from "react";
import {database} from "../../app/firebase";

export const useBoardDetails = (id?: string): Board => {
	const [boardSelected, setBoardSelected] = useState<any>([]);

	useEffect(() => {
			database
				.ref(`/boards/${id}`)
				.on('value', (snapshot) => {
					const boardDataSelected = snapshot.val();
					
					setBoardSelected(boardDataSelected);
				});
		}, []);

	return boardSelected;
};