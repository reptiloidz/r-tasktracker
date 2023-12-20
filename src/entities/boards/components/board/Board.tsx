import React from 'react';
import { Link } from 'react-router-dom';
import { BoardProps } from './typings';

const Board = ({ id, title }: BoardProps) => {
	return (
		<li
		/* key пишем у обертки итерируемого эл-та,
		 * иначе ошибка child in a list should have a unique "key" prop. */
		>
			<Link className="widget widget--primary widget--interactive" to={`/board/${id}`}>
				<h3>{title}</h3>
			</Link>
		</li>
	);
};

export { Board };
