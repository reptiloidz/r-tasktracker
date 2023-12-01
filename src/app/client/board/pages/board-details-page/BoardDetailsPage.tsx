import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useBoards} from "../../../../../shared/hooks/useBoards";
import {Button} from "../../../../../shared/ui/button/Button";
import {database} from "../../../../firebase";

const BoardDetailsPage = () => {
	const [loading, boards] = useBoards();
	const {id} = useParams();
	const [newColumn, setNewColumn] = useState(false);
	const [newColumnTitle, setNewColumnTitle] = useState('');
	const [newColumnRelated, setNewColumnRelated] = useState(id);

	const pushNewColumn = () => {
		database.ref('columns').push({
			title: newColumnTitle,
			relatedTo: newColumnRelated,
		}).catch(alert);
	};

	const addNewColumn = () => {
		setNewColumn(true);
	};

	const cancelAddNewColumn = () => {
		setNewColumn(false);
	};

	return (
		<React.Fragment>
			<h2>
				Доска {id}
			</h2>

			<div className="row md:row-cols-3">
				<div className='layered-content'>
					<div className='layered-content__item'>
						<Button
							className='btn btn--primary btn--xs'
							onClick={addNewColumn}
						>
							Добавить еще одну колонку
							{/*	Добавить колонку*/}
						</Button>
					</div>

					{newColumn &&
						<div className='layered-content__item'>
							<form className='widget widget--primary'>
								<div className='field'>
									<input
										className='field__control'
										type='text' placeholder='Название'
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
			{/*<Board*/}
			{/*	boards={BoardData}*/}
			{/*/>*/}
		</React.Fragment>

	);
};

export {BoardDetailsPage};
