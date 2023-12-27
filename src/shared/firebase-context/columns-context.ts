import { getPromiseFactory } from './promise-factory';
import { Column } from '../../entities/columns/components/column/typings';

export const getColumns = async () => {
	const columnsData = (await getPromiseFactory({
		databaseUrl: '/columns',
	})) as Column[];

	return Object.keys(columnsData).map((key: any) => {
		return {
			key,
			id: key,
			title: columnsData[key].title,
			relatedTo: columnsData[key].relatedTo,
		};
	});
};
