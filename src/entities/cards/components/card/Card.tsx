import React from 'react';
import {Draggable} from "react-beautiful-dnd";

type Props = {
	title?: string;
	id: string | '';
	index: number;
}

const Card = ({
	title,
	id,
	index,
}: Props) => {
	return (
		<Draggable draggableId={id} index={index}>
			{provided => (
				<div
					className="columns__item-widget widget widget--primary widget--interactive"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div>
						<span className="widget__title">{title}</span>
					</div>
				</div>
			)}
		</Draggable>
	);
}


export {Card};