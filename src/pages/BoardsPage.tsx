import React from 'react';
import Board from "../shared/components/board/Board";
import {BoardsData} from "./typings";

const BoardsPage = () => {
	return (
		<React.Fragment>
			<h2>
				Рабочее пространство 1
			</h2>
			<Board
				tasks={BoardsData}
			/>
		</React.Fragment>

	);
};

export default BoardsPage;
