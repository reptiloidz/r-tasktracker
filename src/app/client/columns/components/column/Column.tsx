import React, {useState} from 'react';
import {database} from "../../../../firebase";
import {Link, useParams} from "react-router-dom";
import {Button} from "../../../../../shared/ui/button/Button";
import {useColumns} from "../../../../../shared/hooks/useColumns";
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

	const cancelAddNewCard = () => {
		setNewCard(false);
	};

	const newColumnTitleValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNewColumnTitle(e.target.value);
	};

	const newCardTitleValue: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setNewCardTitle(e.target.value);
	};

	const formSubmit = () => {
		console.log(this)
	};

	const columnCollection = columns
		.filter(column => id === column.relatedTo?.toString())
		.map(column => (
			<li
				key={column.id}
				/* key пишем у обертки итерируемого эл-та,
				* иначе ошибка child in a list should have a unique "key" prop. */
			>
				<div
					className='widget widget--primary'
				>
					<h2
						className='widget__title'
					>
						{column.title}
					</h2>

					<Button
						className='btn btn--xs btn--tertiary'
					>
						test
					</Button>

					<form id={column.id} onSubmit={formSubmit}>
						{newCard &&
							<div className=''>
									<textarea
										className=''
										placeholder='Введите заголовок для новой карточки'
										onChange={newCardTitleValue}
									/>
							</div>
						}

						<Button
							className='btn btn--xs btn--primary'
							onClick={pushNewCard}
						>
							+ Добавить карточку
						</Button>

						{newCard &&
							<Button
								className='btn btn--xs btn--primary'
								onClick={cancelAddNewCard}
							>
								X
							</Button>
						}
					</form>

				</div>
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