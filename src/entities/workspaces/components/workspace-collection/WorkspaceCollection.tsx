import React from 'react';
import { WorkspaceProps } from './typings';
import { Workspace } from '../workspace/Workspace';

const WorkspaceCollection = ({ workspaces, isLoading }: WorkspaceProps) => {
	if (isLoading) {
		return <div className="preloader" />;
	}

	if (!workspaces.length) {
		return <p>Не&nbsp;найдено рабочих пространств. Создайте новое, чтобы начать работу</p>;
	}

	// if (isError)

	return (
		<ul className="workspaces">
			{workspaces.map(workspace => (
				<Workspace
					key={workspace.id}
					id={workspace.id}
					title={workspace.title}
					description={workspace.description}
				/>
			))}
		</ul>
	);
};

export { WorkspaceCollection };
