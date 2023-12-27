import { Column } from '../../entities/columns/pages/column-collection/typings';
import { useEffect, useState } from 'react';
import { getColumns } from '../firebase-context/columns-context';

export const useColumns = (): [boolean, Column[], string?] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [columns, setColumns] = useState<Column[]>([]);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		getColumns()
			.then(response => {
				setColumns(response);
			})
			.catch(err => {
				setErrorText('Не можем получить доступные колонки');
				setColumns([]);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return [loading, columns, errorText];
};
