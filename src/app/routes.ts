import {
	BOARD_DETAIL_ROUTE, BOARD_EDIT_ROUTE,
	// BOARD_ROUTE,
	LAYOUT_ROUTE,
	WORKSPACE_DETAIL_ROUTE,
	WORKSPACE_EDIT_ROUTE,
	WORKSPACES_ROUTE
} from "./routeVariables";
import {BoardDetails} from "../entities/boards/pages/board-details/BoardDetails";
import {WorkspacePage} from "./client/workspace-page/WorkspacePage";
import {WorkspaceDetails} from "../entities/workspaces/pages/workspace-details/WorkspaceDetails";
import {Layout} from "../pages/Layout";
import {WorkspaceEdit} from "../entities/workspaces/pages/workspace-edit/WorkspaceEdit";
import {BoardEdit} from "../entities/boards/pages/board-edit/BoardEdit";

export const publicRoutes = [
	{
		id: 'Layout',
		path: LAYOUT_ROUTE,
		element: Layout,
	},
	{
		path: WORKSPACES_ROUTE,
		element: WorkspacePage,
	},
	{
		path: WORKSPACE_DETAIL_ROUTE,
		element: WorkspaceDetails,
	},
	{
		path: WORKSPACE_EDIT_ROUTE,
		element: WorkspaceEdit,
	},
	{
		path: BOARD_DETAIL_ROUTE,
		element: BoardDetails,
	},
	{
		path: BOARD_EDIT_ROUTE,
		element: BoardEdit,
	},
]