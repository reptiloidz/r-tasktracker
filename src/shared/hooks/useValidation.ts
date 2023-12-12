import {useEffect, useState} from "react";

export const useValidation = (
	value: string,
	validations: [],
	...errors: any
) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinlengthError] = useState(false);
	const [maxLengthError, setMaxlengthError] = useState(false);
	const [inputValid, setInputValid] = useState(false);
	const [minLengthErrorText, setMinLengthErrorText] = useState('Строка слишком короткая');
	const [maxLengthErrorText, setMaxLengthErrorText] = useState('Строка слишком длинная');
	const [isEmptyErrorText, setIsEmptyErrorText] = useState('Поле не может быть пустым');

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinlengthError(true) : setMinlengthError(false);
					setMinLengthErrorText(minLengthErrorText);
					break;

				case 'maxLength':
					value.length > validations[validation] ? setMaxlengthError(true) : setMaxlengthError(false);
					setMaxLengthErrorText(maxLengthErrorText);
					break;

				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					setIsEmptyErrorText(isEmptyErrorText);
					break;
			}
		}
	}, [value]);

	useEffect(() => {
		if (isEmpty || maxLengthError || minLengthError) {
			setInputValid(false);
			return;
		}

		setInputValid(true);
	}, [isEmpty, maxLengthError, minLengthError]);

	return {
		isEmpty,
		minLengthError,
		maxLengthError,
		inputValid,
		minLengthErrorText,
		maxLengthErrorText,
		isEmptyErrorText,
	}
};