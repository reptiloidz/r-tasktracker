import React from 'react';
import Workspace from "../shared/components/workspace/Workspace";
import {WorkspaceData} from "./typings";

const WorkspacePage = () => {
	return (
		<React.Fragment>
			<Workspace
				workspaces={WorkspaceData}
			/>
		</React.Fragment>
	);
};

export default WorkspacePage;