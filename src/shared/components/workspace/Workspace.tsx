import React from 'react';
import {Button} from "../../ui/button/Button";
import {WorkspaceProps, Workspaces} from "./typings";
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
		(workspace: Workspaces) =>
			<li
				key={workspace.id}
			>
				<Link
					className='link'
					to={`/board/${workspace.id}`}
				>
					{workspace.text} {workspace.id}
				</Link>

				{/*{boardCollection}*/}

				<Button button={[{children: 'Создать доску'}]}/>
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
