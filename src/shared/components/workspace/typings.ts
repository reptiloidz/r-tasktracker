export interface WorkspaceProps {
	workspaces: Workspace[];
}

export type Workspace = {
	id: number;
	userId: number;
	description: string;
	title: string;
}
