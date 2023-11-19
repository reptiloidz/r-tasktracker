import React, {ReactNode} from "react";

// todo
export interface PopupProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	title?: string,
	onCancel?: React.MouseEventHandler<HTMLButtonElement>,
	isOpen?: boolean,
	// onSubmit?: React.MouseEventHandler<HTMLButtonElement>,
	onSubmitText?: string,
	children?: ReactNode,
	isDisabled?: boolean,
}