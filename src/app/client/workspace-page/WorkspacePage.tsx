import React from 'react';
import {PageHeader} from "../../../shared/components/page-header/PageHeader";
import {useWorkspaces} from "../../../shared/hooks/useWorkspaces";
import {WorkspaceCollection} from "../../../entities/workspaces/components/workspace-collection/WorkspaceCollection";

const WorkspacePage = () => {
	const [loadingWorkspaces, workspaces] = useWorkspaces();

	return (
		<React.Fragment>
			<PageHeader
				title='Рабочие пространства'
			/>

			<WorkspaceCollection
				workspaces={workspaces}
				isLoading={loadingWorkspaces}
			/>
		</React.Fragment>
	);
};

export {WorkspacePage};
