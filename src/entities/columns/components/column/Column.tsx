import React from 'react';
import {Board} from "../../../boards/components/board-collection/typings";
import {Card} from "../../../cards/components/card/Card";
import {CardNew} from "../../../cards/components/card-new/CardNew";
import {database} from "../../../../app/firebase";
import {useCards} from "../../../../shared/hooks/useCards";

type Props = {
	column: {
		id: string;
		title: string;
		relatedTo?: Board['id'];
	};
}

const Column = ({column}: Props) => {
	const [loading, cards] = useCards();
	const formSubmit = async (title: string) => {
		await database.ref('cards').push({
			relatedTo: column.id,
			title,
		}).catch(alert);
	};

	// if (isLoading) {
	// 	return (
	// 		<div className='preloader'/>
	// 	)
	// }

	return (
		<div className='widget widget--primary'>
			<h2 className='widget__title'>{column.title}</h2>
			{
				cards
					.filter(
						card =>
							card.relatedTo === column.id
					)
					.map(
						card =>
							<Card key={card.id} title={card.title}/>
					)
			}
			<CardNew
				onAddCard={formSubmit}
			/>
		</div>
	);
};

export {Column};
