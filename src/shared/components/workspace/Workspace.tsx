import React from 'react';
import {Button} from "../../ui/button/Button";
import {WorkspaceProps} from "./typings";
import {Link} from "react-router-dom";

const Workspace = ({workspaces}: WorkspaceProps) => {
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
			</li>
	);

	return (
		<React.Fragment>
			<h2>
				Рабочие пространства
			</h2>

			{
				workspaceCollection.length !== 0
				? <ul>
					{workspaceCollection}
				</ul>

				: <p>
					Не&nbsp;найдено рабочих пространств. Создайте новое, чтобы начать работу
				</p>
			}
			
		</React.Fragment>
	);
};

export {Workspace};
