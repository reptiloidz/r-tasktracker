import {ChangeEventHandler} from "react";

export type DropdownProps = {
	options?: any;
	onChange?: ChangeEventHandler<HTMLSelectElement>;
	value?: any
}