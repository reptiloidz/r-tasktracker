import React, {useEffect, useState} from 'react';
import {Workspace} from '../shared/components/workspace/Workspace'
import {WorkspaceData} from './typings';
import {database, db} from '../entities/firebase';
import {Link} from "react-router-dom";

const WorkspacePage = () => {
	const [workspaces, setWorkspaces] = useState<any[]>([]);

	// useEffect(() => {
	// 	db.collection('workspaces').get().then(snapshot => {
	//
	// 		snapshot.forEach(el => {
	// 			let data = el.data();
	//
	// 			setWorkspaces((arr) => [...arr, data]);
	// 		})
	// 	})
	//
	// 	console.log(workspaces)
	// }, []);

	// useEffect(() => {
	// 	fetch('https://r-tasktracker-c4297-default-rtdb.firebaseio.com/workspaces')
	// 		.then((response) => response.json())
	// 		.then((json) => setWorkspaces(json))
	// 		.catch((err) => console.error(err));
	// }, [])


	// fetch('https://jsonplaceholder.typicode.com/posts')
	// 	.then((response) => response.json())
	// 	.then((json) => setWorkspaces(json));


	return (
		<React.Fragment>
			<Workspace
				workspaces={WorkspaceData}
			/>

			<div>
				<ul>
					{/*{*/}
					{/*	workspaces.map(workspace => (*/}
					{/*		<li key={workspace.id}>*/}
					{/*			<Link to={`/workspace/${workspace.id}`}>*/}
					{/*				{workspace.title}*/}
					{/*			</Link>*/}
					{/*		</li>*/}
					{/*	))*/}
					{/*}*/}
				</ul>
			</div>
		</React.Fragment>
	);
};

export {WorkspacePage};