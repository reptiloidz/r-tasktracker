import React, {ReactNode} from "react";

// todo
export interface PopupProps {
	title?: string;
	onCancel?: React.MouseEventHandler<HTMLButtonElement>;
	isOpen?: boolean;
	children?: ReactNode;
	rootClass?: string;
}
