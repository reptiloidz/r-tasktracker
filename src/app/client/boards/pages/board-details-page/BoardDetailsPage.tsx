import React from 'react';
import {useParams} from "react-router-dom";
import {Column} from "../../../columns/components/column/Column";
import {useColumns} from "../../../../../shared/hooks/useColumns";

const BoardDetailsPage = () => {

	const {id} = useParams();
	const [loading, columns] = useColumns();

	return (
		<React.Fragment>
			<h2>
				Доска {id}
			</h2>

			<Column
				columns={columns}
				isLoading={loading}
			/>
		</React.Fragment>

	);
};

export {BoardDetailsPage};
