import React from 'react';
import {Button} from "../../ui/button/Button";
import {WorkspaceProps} from "./typings";
import {Link} from "react-router-dom";

const Workspace = ({ workspaces }: WorkspaceProps) => {
	// const boardCollection = props.map((item: {boards: any}) =>
	// 	item.boards.map((i: {boardTitle: string}, index: number) =>
	// 		<div
	// 			key={index}
	// 		>{i.boardTitle}</div>
	// 	)
	// );

	const workspaceCollection = workspaces.map(
		(workspace) =>
			<li
				key={workspace.id}
			>
				<Link
					className='link'
					to={`/board/${workspace.id}`}
				>
					{workspace.title} {workspace.id}
				</Link>

				{/*{boardCollection}*/}

				<Button>Создать доску</Button>
			</li>
	);

	return (
		<React.Fragment>
			<h2>
				Рабочие пространства
			</h2>

			<ul>
				{workspaceCollection}
			</ul>
		</React.Fragment>
	);
};

export {Workspace};
