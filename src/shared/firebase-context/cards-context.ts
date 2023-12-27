import { getPromiseFactory } from './promise-factory';
import { Card } from '../../entities/cards/components/card/typings';

export const getCards = async () => {
	const cardsData = await getPromiseFactory<Card[]>({
		databaseUrl: '/cards',
	});

	return Object.keys(cardsData).map((key: any) => {
		return {
			key,
			id: key,
			title: cardsData[key].title,
			relatedTo: cardsData[key].relatedTo,
		};
	});
};
