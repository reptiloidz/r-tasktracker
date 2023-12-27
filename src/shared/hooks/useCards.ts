import { Card } from '../../entities/cards/components/card/typings';
import { useEffect, useState } from 'react';
import { getCards } from '../firebase-context/cards-context';

export const useCards = (): [boolean, Card[], string?] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [cards, setCards] = useState<Card[]>([]);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		getCards()
			.then(response => {
				setCards(response);
			})
			.catch(err => {
				setErrorText('Не можем получить доступные карточки');
				setCards([]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return [loading, cards, errorText];
};
