import { useEffect, useState } from 'react';
import { ErrorValidation } from './typings';

export const useValidation = (value: string, validations: ErrorValidation[]) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLength, setMinlength] = useState(false);
	const [maxLength, setMaxlength] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinlength(true) : setMinlength(false);
					break;

				case 'maxLength':
					value.length > validations[validation] ? setMaxlength(true) : setMaxlength(false);
					break;

				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
					break;
			}
		}
	}, [validations, value]);

	useEffect(() => {
		if (isEmpty || maxLength || minLength) {
			setInputValid(false);
			return;
		}

		setInputValid(true);
	}, [isEmpty, maxLength, minLength]);

	return {
		isEmpty,
		minLength,
		maxLength,
		inputValid,
		// minLengthText,
		// maxLengthText,
		// isEmptyErrorText,
	};
};
