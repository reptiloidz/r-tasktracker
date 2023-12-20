import { Workspace } from '../../../workspaces/components/workspace-collection/typings';
import { BoardFormProps } from '../board-form/typings';

export interface BoardNewProps {
	workspaces: Workspace[];
	idWorkspace?: string;
	onDropdownChange?: BoardFormProps['onDropdownChange'];
	onInputChange?: BoardFormProps['onInputChange'];
}
