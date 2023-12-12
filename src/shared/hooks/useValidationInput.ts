import React, {useState} from "react";
import {useValidation} from "./useValidation";

export const useValidationInput = (
	initialValue: string,
	validations: any,
	isEmptyErrorText?: string,
	minLengthErrorText?: string,
	maxLengthErrorText?: string,
) => {
	const [value, setValue] = useState(initialValue);
	const [isDirty, setIsDirty] = useState(false);
	const valid = useValidation(
		value,
		validations,
		isEmptyErrorText,
		minLengthErrorText,
		maxLengthErrorText,
	);

	const onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e ) => {
		setValue(e.target.value);
		setIsDirty(true);
	}
	const onBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setIsDirty(true);
	}

	return {
		value,
		onChange,
		onBlur,
		isDirty,
		...valid,
	};
};