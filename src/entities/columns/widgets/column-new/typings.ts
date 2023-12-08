import React, {ChangeEventHandler} from "react";

export interface ColumnNewProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
	onSubmit: React.MouseEventHandler<HTMLButtonElement>;
	onCancel: React.MouseEventHandler<HTMLButtonElement>;
}