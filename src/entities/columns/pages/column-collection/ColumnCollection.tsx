import React, {useState} from 'react';
import {database} from "../../../../app/firebase";
import {useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import { Column } from '../../components/column/Column';
import {ColumnCollectionProps} from "./typings";
import {ColumnNew} from "../../widgets/column-new/ColumnNew";
import {useValidationInput} from "../../../../shared/hooks/useValidationInput";
import {Loader} from "../../../../shared/components/loader/loader";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {useCards} from "../../../../shared/hooks/useCards";
import {ColumnProps} from "../../components/column/typings";

const ColumnCollection = ({isLoading, columns}: ColumnCollectionProps) => {
	const {id} = useParams();
	const [newColumnTitle, setNewColumnTitle] = useState('');
	const [newColumn, setNewColumn] = useState(false);
	const [columnTitleValidate, error] = useValidationInput('', {isEmpty: true, minLength: 3});

	const pushNewColumn: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault();

		await database.ref('columns').push({
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

	const onDragEndHandler = (result: any) => {
		const {destination, source, draggableId} = result;
		console.log(source.index)

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId
			&& destination.index === source.index
		) {
			return;
		}

		const column = columns.map((column: any) => column[source.droppableId]);

		database.ref(`cards/${result.draggableId}`).update({
			relatedTo: destination.droppableId,
		}).catch(alert);
		console.log(column);
		console.log('destination', destination.droppableId);
		console.log('source droppableId', source.droppableId);
		console.log('result draggableId', result.draggableId);
		// console.log('column', column);

		console.log('result', result);
	}
	const columnCollection = columns
		.filter(column => id === column.relatedTo?.toString())
		.map(column => (
			<li
				key={ column.id }
				/* key пишем у обертки итерируемого эл-та,
				* иначе ошибка child in a list should have a unique "key" prop. */
			>
				<Column column={ column } isLoading={false} />
			</li>
		));

	if (isLoading) {
		return (
			<Loader/>
		)
	}

	const validationError = () => {
		if (columnTitleValidate.isEmpty) {
			return error
		}

		if (columnTitleValidate.minLength) {
			return error
		}
	}

	return (
		<DragDropContext onDragEnd={onDragEndHandler}>
			<ol className="columns container" style={{ overflowX: 'auto', height: '100%' }}>
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
								{columnTitleValidate.isDirty && <p>{validationError()}</p> }
							</ColumnNew>
						</div>
					}
				</li>
			</ol>
		</DragDropContext>
	);
};

export {ColumnCollection};
