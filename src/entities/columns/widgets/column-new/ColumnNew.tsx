import React from 'react';
import {Button} from "../../../../shared/ui/button/Button";
import {ColumnNewProps} from "./typings";

const ColumnNew = ({
	onChange,
	onSubmit,
	onCancel,
	inputName,
	inputValue,
	isDisabledPush,
	children,
}: ColumnNewProps) => {

	const submitHandler: ColumnNewProps['onSubmit'] = (e) => {
		if (onSubmit) {
			onSubmit(e);
		}
	}

	const cancelHandler: ColumnNewProps['onCancel'] = (e) => {
		if (onCancel) {
			onCancel(e);
		}
	}

	const inputValueHandler: ColumnNewProps['onChange'] = (e) => {
		if (onChange) {
			onChange(e);
		}
	}

	return (
		<form className='widget widget--primary'>
			<div className='field'>
				<input
					className='field__control'
					type='text'
					placeholder='Название'
					onChange={inputValueHandler}
					value={inputValue}
					name={inputName}
				/>
			</div>

			{children}

			<Button
				className='btn btn--secondary btn--xs'
				type='submit'
				onClick={submitHandler}
				disabled={isDisabledPush}
			>
				Добавить
			</Button>

			<Button
				className='btn btn--primary btn--xs'
				onClick={cancelHandler}
			>
				Отменить
			</Button>
		</form>
	);
};

export {ColumnNew};