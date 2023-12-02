import {Column} from "../../app/client/columns/components/column/typings";
import {useEffect, useState} from "react";
import {database} from "../../app/firebase";

export const useColumns = (): [boolean, Column[]] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [columns, setColumns] = useState<Column[]>([]);

	useEffect(() => {
		database
			.ref('/columns')
			.on('value', (snapshot) => {
				const columnsData = snapshot.val();

				const columnList = Object.keys(columnsData).map((key) => {
					return {
						key,
						id: key,
						title: columnsData[key].title,
						relatedTo: columnsData[key].relatedTo,
					}
				})
				setColumns(columnList);
				setLoading(false);
			});
	}, []);

	return [loading, columns];
};