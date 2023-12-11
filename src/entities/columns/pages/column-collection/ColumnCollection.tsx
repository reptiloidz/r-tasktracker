import React, {useState} from 'react';
import {database} from "../../../../app/firebase";
import {useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import { Column } from '../../components/column/Column';
import {ColumnCollectionProps} from "./typings";
import {ColumnNew} from "../../widgets/column-new/ColumnNew";

const ColumnCollection = ({isLoading, columns}: ColumnCollectionProps) => {
	const {id} = useParams();
	const [newColumnTitle, setNewColumnTitle] = useState('');
	const [newColumn, setNewColumn] = useState(false);

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
						<ColumnNew
							onChange={newColumnTitleValue}
							onSubmit={pushNewColumn}
							onCancel={cancelAddNewColumn}
						/>
					</div>
				}
			</li>
		</ol>
	);
};

export {ColumnCollection};
