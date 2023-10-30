import React from 'react';
import {BoardInterface} from "./board.interface";
import Button from "../../ui/button/Button";

const Board = ({props}: BoardInterface) => {
	const boardCollection = props.map(
		(item: { link: string; title: string | number }, index: number) =>
		<li>
			<div
				className='desk'
				key={index}
			>
				<h3>
					{item.title}
				</h3>

				<Button
					btnText="Добавить карточку"
				/>
			</div>
		</li>
	);
	return (
		<ol>
			{boardCollection}
		</ol>
	);
};

export default Board;