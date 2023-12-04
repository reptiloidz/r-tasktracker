import React, {useState} from 'react';
import {database} from "../../../../app/firebase";
import {Link, useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import {useColumns} from "../../../../shared/hooks/useColumns";
import { ColumnComponent } from '../../ColumnComponent';
import {ColumnProps} from "./typings";

const Column = ({isLoading, columns}: ColumnProps) => {
	const {id} = useParams();
	const [newColumnTitle, setNewColumnTitle] = useState('');
	const [newCardTitle, setNewCardTitle] = useState('');

	const pushNewColumn = () => {
		database.ref('columns').push({
			title: newColumnTitle,
			relatedTo: id,
		}).catch(alert);
	};

	const pushNewCard = (e: any) => {
		setNewCard(true);

		console.log()

		// if (!e.target.value) return;

		database.ref('cards').push({
			title: newCardTitle,
			relatedTo: e.target.parentElement.id, // todo
		}).catch(alert);

		e.target.value = ''
	};

	const [newColumn, setNewColumn] = useState(false);
	const [newCard, setNewCard] = useState(false);

	const addNewColumn = () => {
		setNewColumn(true);
	};

	const cancelAddNewColumn = () => {
		setNewColumn(false);
	};

	const newColumnTitleValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNewColumnTitle(e.target.value);
	};

	const columnCollection = columns
		.filter(column => id === column.relatedTo?.toString())
		.map(column => (
			<li
				key={column.id}
				/* key пишем у обертки итерируемого эл-та,
				* иначе ошибка child in a list should have a unique "key" prop. */
			>
				<ColumnComponent column={ column } />
			</li>
		));

	if (isLoading) {
		return (
			<div className='preloader'/>
		)
	}

	return (
		<div className="row md:row-cols-2">

			{columnCollection.length !== 0 &&
				<ol className="row md:row-cols-3">
					{columnCollection}
				</ol>
			}

			<div className='layered-content'>
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
						<form className='widget widget--primary'>
							<div className='field'>
								<input
									className='field__control'
									type='text'
									placeholder='Название'
									onChange={newColumnTitleValue}
								/>
							</div>

							<Button
								className='btn btn--secondary btn--xs'
								type='submit'
								onClick={pushNewColumn}
							>
								Добавить
							</Button>

							<Button
								className='btn btn--primary btn--xs'
								onClick={cancelAddNewColumn}
							>
								Отменить
							</Button>
						</form>
					</div>
				}
			</div>
		</div>
	);
};

export {Column};
