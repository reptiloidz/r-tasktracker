import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "../../../../shared/ui/button/Button";
import {BoardCollection} from "../../../boards/components/board-collection/BoardCollection";
import {PageHeader} from "../../../../shared/components/page-header/PageHeader";
import {useWorkspaces} from "../../../../shared/hooks/useWorkspaces";
import {useBoards} from "../../../../shared/hooks/useBoards";
import {BoardNew} from "../../../boards/widgets/board-new/BoardNew";
import {useWorkspaceDetails} from "../../../../shared/hooks/useWorkspaceDetails";

// GET /workspaces
// GET /workspaces/{ id }

const WorkspaceDetails = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const workspaceDetails = useWorkspaceDetails(id);
	const [, workspaces] = useWorkspaces();
	const [loadingBoards, boards] = useBoards();

	const goBack = () => navigate(-1);

	if (!workspaceDetails) {
		// если null
	}

	const workspaceDetailsTitle = workspaceDetails.title ? workspaceDetails.title : '';


	return (
		<div>
			<PageHeader
				title={`Рабочее пространство ${workspaceDetailsTitle}`}
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

			<ol className='row md:row-cols-3 xl:row-cols-4'>
				<BoardCollection
					boards={boards}
					isLoading={loadingBoards}
				/>

				<BoardNew
					workspaces={workspaces}
					idWorkspace={id}
				/>
			</ol>
		</div>
	);
};

export { WorkspaceDetails };
