import React from 'react';
import Board from "../shared/components/board/Board";

const BoardsPage = () => {
	return (
		<React.Fragment>
			<h2>
				Рабочее пространство 1
			</h2>
			<Board
				tasks={[
					{
						id: '1',
						title: 'Доска 1'
					},
					{
						id: '2',
						title: 'Доска 2'
					},
					{
						id: '3',
						title: 'Доска 3'
					},
				]}
			/>
		</React.Fragment>

	);
};

export default BoardsPage;
