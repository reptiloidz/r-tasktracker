import React from 'react';
import { Board } from '../../../boards/components/board-collection/typings';
import { Card } from '../../../cards/components/card/Card';
import { CardNew } from '../../../cards/components/card-new/CardNew';
import { database } from '../../../../app/firebase';
import { useCards } from '../../../../shared/hooks/useCards';
import { Loader } from '../../../../shared/components/loader/loader';
import {Simulate} from "react-dom/test-utils";

type Props = {
	column: {
		id: string;
		title: string;
		relatedTo?: Board['id'];
	};
	isLoading: boolean;
};

const mockRequest = (ms: number, response: unknown) => {
	return new Promise((resolve, reject) => {
		// твой код, который ответит через {ms}
		// опционально выдаст {response} resolve()

		setTimeout(() => {
			console.log('Код, который ответил через', ms);
			resolve(response);
			reject(new Error('Ошибка mockRequest'));
		}, ms);
	});
};

mockRequest(5000, 1)
	.then(console.log)
	.catch(console.log)

const Column = ({ isLoading, column }: Props) => {
	const [, cards, errorText] = useCards();
	const formSubmit = async (title: string) => {
		await database
			.ref('cards')
			.push({
				relatedTo: column.id,
				title,
			})
			.catch(alert);
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="widget widget--primary">
			<h2 className="widget__title">{column.title}</h2>
			{errorText &&
				<p>
					{errorText}
				</p>
			}
			{cards
				.filter(card => card.relatedTo === column.id)
				.map(card => (
					<Card key={card.id} title={card.title} />
				))}
			<CardNew onAddCard={formSubmit} />
		</div>
	);
};

export { Column };
