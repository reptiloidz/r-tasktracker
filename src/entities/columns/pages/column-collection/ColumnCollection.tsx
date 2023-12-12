import React, {useState} from 'react';
import {database} from "../../../../app/firebase";
import {useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import { Column } from '../../components/column/Column';
import {ColumnCollectionProps} from "./typings";
import {ColumnNew} from "../../widgets/column-new/ColumnNew";
import {useValidationInput} from "../../../../shared/hooks/useValidationInput";

const ColumnCollection = ({isLoading, columns}: ColumnCollectionProps) => {
	const {id} = useParams();
	const [newColumnTitle, setNewColumnTitle] = useState('');
	const [newColumn, setNewColumn] = useState(false);
	const columnTitleValidate = useValidationInput('', {isEmpty: true, minLength: 3});

	const pushNewColumn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		database.ref('columns').push({
			title: newColumnTitle,
			relatedTo: id,
		}).catch(alert);

		setNewColumn(false);
	};

	const addNewColumn = () => {
		setNewColumn(true);

		setNewColumnTitle('');
	};

	const cancelAddNewColumn = () => {
		setNewColumn(false);

		setNewColumnTitle('');
	};

	const newColumnTitleValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNewColumnTitle(e.target.value);

		columnTitleValidate.onChange(e);
	};

	const columnCollection = columns
		.filter(column => id === column.relatedTo?.toString())
		.map(column => (
			<li
				key={column.id}
				/* key пишем у обертки итерируемого эл-та,
				* иначе ошибка child in a list should have a unique "key" prop. */
			>
				<Column column={ column } isLoading={false} />
			</li>
		));

	if (isLoading) {
		return (
			<div className='preloader'/>
		)
	}

	return (
		<ol className="columns">
			{columnCollection}

			<li className='layered-content'>
				<div className='layered-content__item'>
					<Button
						className='btn btn--primary btn--xs'
						onClick={addNewColumn}
					>
						{!columnCollection.length ? 'Добавить колонку' : 'Добавить еще одну колонку'}
					</Button>
				</div>

				{newColumn &&
					<div className='layered-content__item'>
						{/*<form className='widget widget--primary'>*/}
						{/*	<div className='field'>*/}
						{/*		<input*/}
						{/*			className='field__control'*/}
						{/*			type='text'*/}
						{/*			placeholder='Название'*/}
						{/*			onChange={newColumnTitleValue}*/}
						{/*			value={columnTitleValidate.value}*/}
						{/*			name={newColumnTitle}*/}
						{/*		/>*/}
						{/*	</div>*/}

						{/*	{*/}
						{/*		(columnTitleValidate.isDirty && columnTitleValidate.isEmpty) &&*/}
						{/*		<p>Поле не может быть пустым</p>*/}
						{/*	}*/}
						{/*	{*/}
						{/*		(columnTitleValidate.isDirty && columnTitleValidate.minLengthError) &&*/}
						{/*		<p>Минимальная длина не менее 3х</p>*/}
						{/*	}*/}

						{/*	<Button*/}
						{/*		className='btn btn--secondary btn--xs'*/}
						{/*		type='submit'*/}
						{/*		onClick={pushNewColumn}*/}
						{/*		disabled={!columnTitleValidate.inputValid}*/}
						{/*	>*/}
						{/*		Добавить*/}
						{/*	</Button>*/}

						{/*	<Button*/}
						{/*		className='btn btn--primary btn--xs'*/}
						{/*		onClick={cancelAddNewColumn}*/}
						{/*	>*/}
						{/*		Отменить*/}
						{/*	</Button>*/}
						{/*</form>*/}

						<ColumnNew
							onChange={newColumnTitleValue}
							onSubmit={pushNewColumn}
							onCancel={cancelAddNewColumn}
							inputName='newColumnTitle'
							inputValue={columnTitleValidate.value}
							isDisabledPush={!columnTitleValidate.inputValid}
						>
							{
								(columnTitleValidate.isDirty && columnTitleValidate.isEmpty) &&
								<p>Поле не может быть пустым</p>
							}
							{
								(columnTitleValidate.isDirty && columnTitleValidate.minLengthError) &&
								<p>Минимальная длина не менее 3х</p>
							}
						</ColumnNew>
					</div>
				}
			</li>
		</ol>
	);
};

export {ColumnCollection};
