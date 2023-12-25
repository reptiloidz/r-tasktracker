import { useEffect, useState } from 'react';
import { ErrorValidation } from './typings';

export type Checkers = {
	isEmpty: boolean;
	minLength: boolean;
	maxLength: boolean;
	inputValid: boolean;
}
export const useValidation = (value: string, validations: ErrorValidation[]): [Checkers, string] => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLength, setMinlength] = useState(false);
	const [maxLength, setMaxlength] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	const [error, setError] = useState('')

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					!value.length ? setIsEmpty(true) : setIsEmpty(false);
					setError('isEmpty')
					break;
				case 'minLength':
					value.length && value.length < validations[validation] ? setMinlength(true) : setMinlength(false);
					setError('minLength')
					break;

				case 'maxLength':
					value.length && value.length > validations[validation] ? setMaxlength(true) : setMaxlength(false);
					setError('maxLength')
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

	return [{
		isEmpty,
		minLength,
		maxLength,
		inputValid,
		// minLengthText,
		// maxLengthText,
		// isEmptyErrorText,
	}, error];
};
