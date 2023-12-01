import {
	BOARD_DETAIL_ROUTE,
	// BOARD_ROUTE,
	LAYOUT_ROUTE,
	WORKSPACE_DETAIL_ROUTE,
	WORKSPACE_EDIT_ROUTE,
	WORKSPACES_ROUTE
} from "./routeVariables";
import {BoardDetailsPage} from "./client/board/pages/board-details-page/BoardDetailsPage";
import {WorkspacePage} from "./client/workspace/pages/workspace-page/WorkspacePage";
import {WorkspaceDetailsPage} from "./client/workspace/pages/workspace-details-page/WorkspaceDetailsPage";
import {Layout} from "../pages/Layout";
import {WorkspaceEdit} from "./client/workspace/pages/workspace-edit/WorkspaceEdit";

export const publicRoutes = [
	{
		id: 'Layout',
		path: LAYOUT_ROUTE,
		element: Layout,
	},
	// {
	// 	path: BOARD_ROUTE,
	// 	element: BoardPage,
	// },
	{
		path: WORKSPACES_ROUTE,
		element: WorkspacePage,
	},
	{
		path: WORKSPACE_DETAIL_ROUTE,
		element: WorkspaceDetailsPage,
	},
	{
		path: WORKSPACE_EDIT_ROUTE,
		element: WorkspaceEdit,
	},
	{
		path: BOARD_DETAIL_ROUTE,
		element: BoardDetailsPage,
	},
	// {
	// 	path: NOT_FOUND_ROUTE,
	// 	element: NotFoundPage,
	// },
	// {
	// 	path: WORKSPACE_NOT_FOUND_ROUTE,
	// 	element: NotFoundPage,
	// },
]