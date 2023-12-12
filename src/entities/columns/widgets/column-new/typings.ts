import React, {ChangeEventHandler, ReactNode} from "react";

export interface ColumnNewProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
	onSubmit: React.MouseEventHandler<HTMLButtonElement>;
	onCancel: React.MouseEventHandler<HTMLButtonElement>;
	inputName?: string;
	inputValue?: string;
	isDisabledPush?: boolean;
	children?: ReactNode;
}