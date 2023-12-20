import React from 'react';
import { Button } from '../../../../shared/ui/button/Button';
import { PageHeader } from '../../../../shared/components/page-header/PageHeader';
import { useNavigate, useParams } from 'react-router-dom';

const BoardEdit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const saveChanges = () => {
		console.log('saved');
		goBack();
	};

	return (
		<PageHeader title={`BoardEdit id: ${id}`}>
			<Button className="header__btn btn btn--primary btn--xs" onClick={saveChanges}>
				Сохранить
			</Button>
			<Button className="header__btn btn btn--primary btn--xs" onClick={goBack}>
				Назад
			</Button>
		</PageHeader>
	);
};

export { BoardEdit };
