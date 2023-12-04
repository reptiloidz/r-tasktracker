import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import {Board} from "../../../boards/components/board/Board";
import {PageHeader} from "../../../../shared/components/page-header/PageHeader";
import {useWorkspaces} from "../../../../shared/hooks/useWorkspaces";
import {useBoards} from "../../../../shared/hooks/useBoards";
// import {Board} from "../shared/components/one-board/typings";

// GET /workspaces
// GET /workspaces/{ id }

const WorkspaceDetailsPage = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const [, workspaces] = useWorkspaces();
	const [loadingB, boards] = useBoards();

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
				boards={boards}
				isLoading={loadingB}
			/>
		</div>
	);
};

export {WorkspaceDetailsPage};
