import { Card } from '../../entities/cards/components/card/typings';
import { useEffect, useState } from 'react';
import { database } from '../../app/firebase';

export const useCards = (): [boolean, Card[]] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		database.ref('/cards').on('value', snapshot => {
			const cardsData = snapshot.val();

			const cardList = Object.keys(cardsData).map(key => {
				return {
					key,
					id: key,
					title: cardsData[key].title,
					relatedTo: cardsData[key].relatedTo,
				};
			});
			setCards(cardList);
			setLoading(false);
		});
	}, []);

	return [loading, cards];
};
