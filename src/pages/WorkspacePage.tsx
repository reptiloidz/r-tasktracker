import React, {useEffect, useState} from 'react';
import {Workspace} from "../shared/components/workspace/Workspace";
import {WorkspaceData} from "./typings";
import {Link} from "react-router-dom";
import {log} from "util";

const WorkspacePage = () => {
	const [workspaces, setWorkspaces] = useState<any[]>([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/?userId=1')
			.then((response) => response.json())
			.then((json) => setWorkspaces(json))
			.catch((err) => console.error(err));
	}, [])

	// fetch('https://jsonplaceholder.typicode.com/posts')
	// 	.then((response) => response.json())
	// 	.then((json) => setWorkspaces(json));


	return (
		<React.Fragment>
			<Workspace
				workspaces={WorkspaceData}
			/>

			<div>
				<ul>
					{
						workspaces.map(workspace => (
							<li key={workspace.id}>
								<Link to={`/workspace/${workspace.id}`}>
									{workspace.title}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</React.Fragment>
	);
};

export {WorkspacePage};