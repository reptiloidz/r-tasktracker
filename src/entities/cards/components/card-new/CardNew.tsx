import React, {useState} from 'react';
import {Button} from "../../../../shared/ui/button/Button";

type Props = {
	onAddCard: (title: string) => void;
}

const validateTitle = (title: string): string => {
	if (title) {
		console.log('validateTitle', title)
		const cleanTitle = title.trim();
		if (cleanTitle.length === 0) {
			console.log('validateTitle', 'Введите название')
			return 'Введите название';
		}

		if (cleanTitle.length < 3) {
			console.log('validateTitle', 'Название должно быть не менее 3х символов')
			return 'Название должно быть не менее 3х символов';
		}
	}

	console.log('validateTitle', 'Введите название')
	return 'Введите название';
}

const CardNew = ({
	onAddCard
}: Props) => {
	const [formVisible, setFormVisible] = useState(false);
	const [cardTitle, setCardTitle] = useState('');
	const [error, setError] = useState<string>('');

	const openCardHandler = () => {
		setFormVisible(true);
	}

	const cancelHandler = () => {
		setFormVisible(false);
	}

	const changeTitleHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		setCardTitle(event.target.value);
	}

	const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		const checkTitle = validateTitle(cardTitle);

		return onAddCard(cardTitle);
	}

	const testFunc: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		const checkTitle = validateTitle(cardTitle);

		console.log(cardTitle)
	}

	return (
		<React.Fragment>
			{!formVisible && (
				<Button
					className='columns__item-btn btn btn--xs btn--primary'
					onClick={openCardHandler}
				>
					+ Добавить карточку
				</Button>
			)}
			{/*<textarea*/}
			{/*	value={cardTitle}*/}
			{/*	placeholder='Введите заголовок для новой карточки'*/}
			{/*	onChange={changeTitleHandler}*/}
			{/*/>*/}

			{/*<Button*/}
			{/*	className='btn btn--xs btn--secondary'*/}
			{/*	onClick={testFunc}*/}
			{/*>*/}
			{/*	test*/}
			{/*</Button>*/}

			{formVisible && (
				<form>
					<div className=''>
						<textarea
							className=''
							value={cardTitle}
							placeholder='Введите заголовок для новой карточки'
							onChange={changeTitleHandler}
						/>
						{error && <span>{error}</span>}
					</div>
					<Button
						className='btn btn--xs btn--secondary'
						onClick={submitHandler}
					>
						+ Добавить карточку
					</Button>
					<Button
						className='btn btn--xs btn--primary'
						onClick={cancelHandler}
					>
						X
					</Button>
				</form>
			)}
		</React.Fragment>
	);
};

export {CardNew};
