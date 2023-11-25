import React from 'react';
import {WorkspaceProps} from "./typings";
import {Link} from "react-router-dom";

const Workspace = ({workspaces}: WorkspaceProps) => {
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
		<React.Fragment>
			{
				workspaceCollection.length !== 0
				? <ul className='workspaces'>
					{workspaceCollection}
				</ul>

				: <div className='preloader'></div>
				// todo preloader && not found
				// <p>
				// 	Не&nbsp;найдено рабочих пространств. Создайте новое, чтобы начать работу
				// </p>
			}
		</React.Fragment>
	);
};

export {Workspace};
