import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Workspace} from "../shared/components/workspace/typings";

const WorkspaceDetailsPage = () => {
	const {id} = useParams();
	const [workspace, setWorkspace] = useState<Workspace | null>(null);
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/?userId=1&id=${id}`)
			.then<Workspace[]>((response) => response.json())
			.then((json) => setWorkspace(json[0]))
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<div>
			WorkspaceDetailsPage id: {id}

			{
				// TODO
				workspace && (
					<React.Fragment>
						<h2>{workspace.title}</h2>
						<p>{workspace.body}</p>
						<Link to={`/workspace/${id}/edit`}>
							Edit workspace
						</Link>
					</React.Fragment>
				)
			}

			<button
				onClick={goBack}
			>
				Назад
			</button>
		</div>
	);
};

export {WorkspaceDetailsPage};
