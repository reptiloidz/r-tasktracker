import React from 'react';
import {useParams} from "react-router-dom";
import {useBoards} from "../entities/useBoards";

const BoardPage = () => {
	const [loading, boards] = useBoards();
	const {id} = useParams();
	// console.log(boards)

	return (
		<React.Fragment>
			<h2>
				Рабочее пространство {id}
			</h2>
			{/*<Board*/}
			{/*	boards={BoardData}*/}
			{/*/>*/}
		</React.Fragment>

	);
};

export {BoardPage};
