import { ChangeEventHandler } from 'react';
import { Workspace } from '../../../entities/workspaces/components/workspace-collection/typings';

export type DropdownProps = {
	options: Workspace[]; //todo type
	onChange?: ChangeEventHandler<HTMLSelectElement>;
	value?: string;
};
