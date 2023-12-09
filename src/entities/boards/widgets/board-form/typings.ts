import React, {ChangeEventHandler, FormEventHandler} from "react";
import {PopupProps} from "../../../../shared/components/popup/typings";
import {PopupFormProps} from "../../../../shared/components/popup-form/typings";

export interface BoardFormProps {
	isOpen?: PopupProps['isOpen'];
	dropdownValue: any;
	dropdownOptions: any;
	onCancel?: PopupProps['onCancel'];
	onDropdownChange?: ChangeEventHandler<HTMLSelectElement>;
	onInputChange?: ChangeEventHandler<HTMLInputElement>;
	onSubmit?: PopupFormProps['onSubmit'];
}