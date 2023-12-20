import { ChangeEventHandler } from 'react';
import { PopupProps } from '../../../../shared/components/popup/typings';
import { PopupFormProps } from '../../../../shared/components/popup-form/typings';
import { Workspace } from '../../../workspaces/components/workspace-collection/typings';

export interface BoardFormProps {
	isOpen?: PopupProps['isOpen'];
	dropdownValue?: string;
	dropdownOptions: Workspace[];
	onCancel?: PopupProps['onCancel'];
	onDropdownChange?: ChangeEventHandler<HTMLSelectElement>;
	onInputChange?: ChangeEventHandler<HTMLInputElement>;
	onSubmit?: PopupFormProps['onSubmit'];
}
