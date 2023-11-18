import React, {ReactNode} from "react";

// todo
export interface PopupProps {
	title?: string,
	onCancel?: React.MouseEventHandler<HTMLButtonElement>,
	isOpen?: boolean,
	onSubmit?: React.MouseEventHandler<HTMLButtonElement>,
	onSubmitText?: string,
	children?: ReactNode,
}