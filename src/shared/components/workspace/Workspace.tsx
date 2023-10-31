import React from 'react';
import Button from "../../ui/button/Button";
import {WorkspaceProps} from "./typings";

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
			<li>
				<a
					className='link'
					key={workspace.id}
					href={workspace.link}
				>
					{workspace.text}
				</a>

				{/*{boardCollection}*/}

				<Button
					btnText="Создать доску"
				/>
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

export default Workspace;
