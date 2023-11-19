import React from 'react';
import {Board} from "../shared/components/board/Board";
import {BoardData} from "./typings";
import {useParams} from "react-router-dom";

const BoardPage = () => {
	const {id} = useParams();

	return (
		<React.Fragment>
			<h2>
				Рабочее пространство {id}
			</h2>
			{/*<Board*/}
			{/*	tasks={BoardData}*/}
			{/*/>*/}
		</React.Fragment>

	);
};

export {BoardPage};
