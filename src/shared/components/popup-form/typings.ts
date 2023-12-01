import React, {ReactNode} from "react";

export interface PopupFormProps {
	children?: ReactNode;
	onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}