import React, {useEffect, useState} from 'react';
import {database} from '../../firebase';
import {PageHeader} from "../../../shared/components/page-header/PageHeader";
import {useWorkspaces} from "../../../shared/hooks/useWorkspaces";
import {Workspace} from "../../../entities/workspaces/components/workspace/Workspace";

const WorkspacePage = () => {
	const [loading, workspaces] = useWorkspaces();

	return (
		<React.Fragment>
			<PageHeader
				title='Рабочие пространства'
			/>

			<Workspace
				workspaces={workspaces}
				isLoading={loading}
			/>
		</React.Fragment>
	);
};

export {WorkspacePage};
