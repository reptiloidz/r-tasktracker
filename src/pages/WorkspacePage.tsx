import React, {useEffect, useState} from 'react';
import {Workspace} from '../shared/components/workspace/Workspace';
import {database} from '../entities/firebase';
import {PageHeader} from "../shared/ui/page-header/PageHeader";
import {useWorkspaces} from "../entities/hooks";

const WorkspacePage = () => {
	const {workspaces} = useWorkspaces();

	return (
		<React.Fragment>
			<PageHeader
				title='Рабочие пространства'
			/>

			<Workspace
				workspaces={workspaces}
			/>
		</React.Fragment>
	);
};

export {WorkspacePage};