export interface WorkspaceProps {
	workspaces: Workspace[];
}

export type Workspace = {
	id: number;
	userId: number;
	body: string;
	title: string;
}
