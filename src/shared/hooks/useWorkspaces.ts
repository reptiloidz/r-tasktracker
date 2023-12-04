import {useEffect, useState} from "react";
import {database} from "../../app/firebase";
import {Workspace} from "../../entities/workspaces/components/workspace/typings";

// use-workspace.ts

export const useWorkspaces = (): [boolean, Workspace[]] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [workspaces, setWorkspaces] = useState<Workspace[]>([]);

	useEffect(() => {
		database
			.ref('/workspaces')
			.on('value', (snapshot) => {
				const workspacesData = snapshot.val();

				const workspaceList = Object.keys(workspacesData).map((key) => {
					return {
						key,
						id: key,
						title: workspacesData[key].title,
						description: workspacesData[key].description,
					}
				})
				setWorkspaces(workspaceList);
				setLoading(false);
			});
	}, []);

	return [loading, workspaces];
};
