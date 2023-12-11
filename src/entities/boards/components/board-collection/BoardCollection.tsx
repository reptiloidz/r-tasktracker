import React from 'react';
import {BoardProps} from "./typings";
import {Link, useParams} from "react-router-dom";

//  uuid
const BoardCollection = ({boards, isLoading}: BoardProps) => {

	const {id} = useParams();

	const boardCollection = boards.map(
		(board) => {
			if (id !== board.relatedTo?.toString()) return null;

			return (
				<li
					key={board.id}
					/* key пишем у обертки итерируемого эл-та,
					* иначе ошибка child in a list should have a unique "key" prop. */
				>
					<Link
						className='widget widget--primary widget--interactive'
						to={`/board/${board.id}`}
					>
						<h3>
							{board.title}
						</h3>
					</Link>
				</li>
			);
		}
	);

	if (isLoading) {
		return (
			<div className='preloader'/>
		)
	}

	return (
		<React.Fragment>
			{boardCollection}
		</React.Fragment>
	);
};

export {BoardCollection};
