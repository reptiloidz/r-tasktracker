export interface WorkspaceProps {
	workspaces: Workspace[];
}

export type Workspace = {
	id: string;
	description?: string;
	title: string;
}
