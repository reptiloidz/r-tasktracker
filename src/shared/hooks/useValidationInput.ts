import React, { useState } from 'react';
import {Checkers, useValidation} from './useValidation';

export type ValidationInputResult = Checkers & {
	value: string;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
	onBlur: (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	isDirty: boolean;
}

export const useValidationInput = (
	initialValue: string,
	validations: any,
	// isEmptyErrorText?: string,
	// minLengthErrorText?: string,
	// maxLengthErrorText?: string,
): [ValidationInputResult, string] => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);
	const [valid, error] = useValidation(
		value,
		// isDirty,
		validations,
		// isEmptyErrorText,
		// minLengthErrorText,
		// maxLengthErrorText,
	);

	const onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = e => {
		setValue(e.target.value);
		setIsDirty(true);
	};
	const onBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setIsDirty(true);
	};

	return [{
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	}, error];
};
