import React, {ChangeEventHandler} from "react";
import {PopupProps} from "../../../../../shared/components/popup/typings";

export interface BoardNewProps {
	isOpen?: PopupProps['isOpen'];
	dropdownValue: any;
	dropdownOptions: any;
	onCancel?: React.MouseEventHandler<HTMLButtonElement>;
	onDropdownChange?: ChangeEventHandler<HTMLSelectElement>;
	onInputChange?: ChangeEventHandler<HTMLInputElement>;
	onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}