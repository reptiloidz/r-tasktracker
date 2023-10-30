import React from 'react';
import Board from "../shared/components/board/Board";

const BoardsPage = () => {
	return (
		<React.Fragment>
			<h2>
				Рабочее пространство 1
			</h2>
			<Board
				props={[
					{
						title: 'Доска 1'
					},
					{
						title: 'Доска 2'
					},
					{
						title: 'Доска 3'
					},
				]}
			/>
		</React.Fragment>

	);
};

export default BoardsPage;