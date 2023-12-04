import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import {PageHeader} from "../../../../shared/components/page-header/PageHeader";

const WorkspaceEdit = () => {
	const {id} = useParams();
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	const saveChanges = () => {
		console.log('saved');
		goBack();
	}

	return (
		<React.Fragment>
			<PageHeader
				title={`WorkspaceEdit id: ${id}`}
			>
				<Button
					className='header__btn btn btn--primary btn--xs'
					onClick={saveChanges}
				>
					Сохранить
				</Button>
				<Button
					className='header__btn btn btn--primary btn--xs'
					onClick={goBack}
				>
					Назад
				</Button>
			</PageHeader>

			<div className='field'>
				<input
					className='field__control'
					type='text'
					placeholder='Название'
				/>
			</div>

			<div className='field'>
				<input
					className='field__control'
					type='text' placeholder='Описание'
				/>
			</div>
		</React.Fragment>
	);
};

export {WorkspaceEdit};