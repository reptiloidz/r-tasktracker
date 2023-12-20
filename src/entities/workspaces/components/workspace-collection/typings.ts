export interface WorkspaceProps {
	workspaces: Workspace[];
	isLoading: boolean;
}

export type Workspace = {
	id: string;
	description?: string;
	title: string;
};
