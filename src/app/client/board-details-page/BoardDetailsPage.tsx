import React from 'react';
import {useParams} from "react-router-dom";
import {Column} from "../../../entities/columns/components/column/Column";
import {useColumns} from "../../../shared/hooks/useColumns";
import { useFirstRender } from '../../../shared/hooks/isFirstRender';

const BoardDetailsPage = () => {

	const {id} = useParams();
	const [loading, columns] = useColumns();

	const isFirstRender = useFirstRender();

	React.useEffect(() => {
		if (isFirstRender) {
			// что-то при первом рендере
		}
	}, [isFirstRender]);

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
