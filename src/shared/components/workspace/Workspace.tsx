import React from 'react';
import {WorkspaceInterface} from "./workspace.interface";
import Button from "../../ui/button/Button";

const Workspace = ({props}: WorkspaceInterface) => {
	const boardCollection = props.map((item: {boards: any}) =>
		item.boards.map((i: {boardTitle: string}, index: number) =>
			<div
				key={index}
			>{i.boardTitle}</div>
		)
	);

	const workspaceCollection = props.map(
		(item: { link: string; text: string | number, boards: any }, index: number) =>
			<li>
				<a
					className='link'
					key={index}
					href={item.link}
				>
					{item.text}
				</a>

				{boardCollection}

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