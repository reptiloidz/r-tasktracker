import {useEffect, useState} from "react";
import {database} from "./firebase";


export const useWorkspaces = () => {
	const [workspaces, setWorkspaces] = useState<any[]>([]);

	useEffect(() => {
		database.ref('/workspaces').on('value', snapshot => {
			const workspacesData = snapshot.val();

			const getWorkspaces = Object.keys(workspacesData).map((key) => {
				return {
					key,
					id: key,
					title: workspacesData[key].title,
					description: workspacesData[key].description,
				}
			})
			setWorkspaces(getWorkspaces);

			//todo 2 раза вызывается
			console.log(workspaces);
		});
	}, []);

	return {workspaces};
};
