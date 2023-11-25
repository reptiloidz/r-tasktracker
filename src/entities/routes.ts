import {
	BOARD_DETAIL_ROUTE,
	// BOARD_ROUTE,
	LAYOUT_ROUTE,
	WORKSPACE_DETAIL_ROUTE,
	WORKSPACE_EDIT_ROUTE,
	WORKSPACES_ROUTE
} from "./routeVariables";
import {BoardPage} from "../pages/BoardPage";
import {WorkspacePage} from "../pages/WorkspacePage";
import {WorkspaceDetailsPage} from "../pages/WorkspaceDetailsPage";
import {WorkspaceEdit} from "../shared/components/workspace-edit/WorkspaceEdit";
import {WorkspaceNew} from "../shared/components/workspace-new/WorkspaceNew";
import {Layout} from "../app/Layout";
import {BoardDetailsPage} from "../pages/BoardDetailsPage";

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