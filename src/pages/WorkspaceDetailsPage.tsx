import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "../shared/ui/button/Button";
import {BoardData} from "./typings";
import {Board} from "../shared/components/board/Board";
import {PageHeader} from "../shared/ui/page-header/PageHeader";
import {useWorkspaces} from "../entities/hooks";

// GET /workspaces
// GET /workspaces/{ id }

const WorkspaceDetailsPage = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const [loading, workspaces] = useWorkspaces();

	let workspaceDetailTitle: string = '';

	workspaces.map((workspace) => {
		if (workspace.id === id) {
			workspaceDetailTitle = workspace.title;
		}
	});

	const goBack = () => navigate(-1);

	return (
		<div>
			<PageHeader
				title={`Рабочее пространство ${workspaceDetailTitle} id: ${id}`}
			>
				<Link
					className='header__btn btn btn--primary btn--xs'
					to='edit'
				>
					Редактировать
				</Link>

				<Button
					className='header__btn btn btn--primary btn--xs'
					onClick={goBack}
				>
					Назад
				</Button>
			</PageHeader>

			<Board
				tasks={BoardData}
			/>
		</div>
	);
};

export {WorkspaceDetailsPage};
