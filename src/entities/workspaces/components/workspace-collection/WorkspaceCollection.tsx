import React from 'react';
import {WorkspaceProps} from "./typings";
import {Link} from "react-router-dom";

const WorkspaceCollection = ({ workspaces, isLoading }: WorkspaceProps) => {
	if (isLoading) {
		return (
			<div className='preloader' />
		)
	}

	if (!workspaces.length) {
		return (
			<p>Не&nbsp;найдено рабочих пространств. Создайте новое, чтобы начать работу</p>
		)
	}

	// if (isError)

	const workspaceCollection = workspaces.map(
		(workspace) =>
			<li
				key={workspace.id}
			>
				<Link
					className='widget widget--primary widget--interactive'
					to={`/workspace/${workspace.id}`}
				>
					{ workspace.title &&
						<span className='widget__title'>
							{workspace.title}
						</span>
					}

					<span>
						{workspace.id}
					</span>
					{ workspace.description &&
						<span className='widget__description'>
							{workspace.description}
						</span>
					}
				</Link>
			</li>
	);

	return (
		<ul className='workspaces'>
			{workspaceCollection}
		</ul>
	);
};

export {WorkspaceCollection};
