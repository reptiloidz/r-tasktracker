import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ColumnCollection } from '../../../columns/pages/column-collection/ColumnCollection';
import { useColumns } from '../../../../shared/hooks/useColumns';
import { useFirstRender } from '../../../../shared/hooks/isFirstRender';
import { PageHeader } from '../../../../shared/components/page-header/PageHeader';
import { Button } from '../../../../shared/ui/button/Button';
import { useBoardDetails } from '../../../../shared/hooks/useBoardDetails';

const BoardDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [loading, columns] = useColumns();
	const boardSelected = useBoardDetails(id);
	const goBack = () => navigate(-1);

	const isFirstRender = useFirstRender();

	React.useEffect(() => {
		if (isFirstRender) {
			// что-то при первом рендере
			console.log('first render');
		}
	}, [isFirstRender]);

	const boardSelectedTitle = boardSelected.title ? boardSelected.title : '';

	return (
		<React.Fragment>
			<PageHeader title={`Доска ${boardSelectedTitle}`}>
				<Link className="header__btn btn btn--primary btn--xs" to="edit">
					Редактировать
				</Link>

				<Button className="header__btn btn btn--primary btn--xs" onClick={goBack}>
					Назад
				</Button>
			</PageHeader>

			<ColumnCollection columns={columns} isLoading={loading} />
		</React.Fragment>
	);
};

export { BoardDetails };
