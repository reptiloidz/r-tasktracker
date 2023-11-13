export interface WorkspaceProps {
	workspaces: Workspaces[],
}

export type Workspaces = {
	id: string;
	text: string;
}