import {useEffect, useState} from "react";

export const useValidation = (value: string, validations: []) => {
	const [isEmpty, setIsEmpty] = useState(true);
	const [minLengthError, setMinlengthError] = useState(false);
	const [maxLengthError, setMaxlengthError] = useState(false);
	const [inputValid, setInputValid] = useState(false);

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinlengthError(true) : setMinlengthError(false);
					break;

				case 'maxLength':
					value.length > validations[validation] ? setMaxlengthError(true) : setMaxlengthError(false);
					break;

				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true);
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
	}
};