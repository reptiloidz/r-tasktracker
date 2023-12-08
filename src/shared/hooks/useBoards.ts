import {Board} from "../../entities/boards/components/board-collection/typings";
import {useEffect, useState} from "react";
import {database} from "../../app/firebase";


export const useBoards = (): [boolean, Board[]] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [boards, setBoards] = useState<Board[]>([]);

	useEffect(() => {
		database
			.ref('/boards')
			.on('value', (snapshot) => {
				const boardsData = snapshot.val();

				const boardList = Object.keys(boardsData).map((key) => {
					return {
						key,
						id: key,
						title: boardsData[key].title,
						relatedTo: boardsData[key].relatedTo,
					}
				})
				setBoards(boardList);
				setLoading(false);
			});
	}, []);

	return [loading, boards];
};