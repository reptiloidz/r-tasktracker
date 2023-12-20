import React, {useState} from 'react';
import {Button} from "../../../../shared/ui/button/Button";
import {useValidationInput} from "../../../../shared/hooks/useValidationInput";
import {CardNewProps} from "./typings";

const CardNew = ({
	onAddCard
}: CardNewProps) => {
	const [formVisible, setFormVisible] = useState(false);
	const [cardTitle, setCardTitle] = useState('');
	const [cardTitleValidate, error] = useValidationInput('', {isEmpty: true, minLength: 3});

	const addCardHandler: CardNewProps['onAddCard'] = (e) => {
		if (onAddCard) {
			onAddCard(e);
		}
	}

	const openCardHandler = () => {
		setFormVisible(true);
	}

	const cancelHandler = () => {
		setFormVisible(false);

		setCardTitle('');
	}

	const changeTitleHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setCardTitle(e.target.value);
		// console.log(cardTitle)

		cardTitleValidate.onChange(e);
	}

	// const blurTitleHandler = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
	// 	cardTitleValidate.onBlur(e);
	// };

	const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		setFormVisible(false);
		addCardHandler(cardTitle);

		setCardTitle(''); //todo not w
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

			{formVisible && (
				<form>
					<div className=''>
						<textarea
							className=''
							name='cardTitle'
							value={cardTitleValidate.value}
							placeholder='Введите заголовок для новой карточки'
							onChange={changeTitleHandler}
							// onBlur={blurTitleHandler}
						/>

						{
							(cardTitleValidate.isDirty && cardTitleValidate.isEmpty) &&
							<p>{error}</p>
						}
						{
							(cardTitleValidate.isDirty && cardTitleValidate.minLength) &&
							<p>{error}</p>
						}


					</div>
					<Button
						className='btn btn--xs btn--secondary'
						onClick={submitHandler}
						disabled={!cardTitleValidate.inputValid}
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
