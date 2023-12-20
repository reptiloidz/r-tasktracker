import React from 'react';
import { BoardProps } from './typings';
import { useParams } from 'react-router-dom';
import { Board } from '../board/Board';
import { Loader } from '../../../../shared/components/loader/loader';

//  uuid
const BoardCollection = ({ boards, isLoading }: BoardProps) => {
	const { id } = useParams();

	if (isLoading) {
		return <Loader />;
	}

	return (
		<React.Fragment>
			{boards
				.filter(board => id === board.relatedTo.toString())
				.map(board => (
					<Board key={board.id} id={board.id} title={board.title} />
				))}
		</React.Fragment>
	);
};

export { BoardCollection };
