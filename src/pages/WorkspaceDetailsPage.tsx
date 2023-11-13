import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "../shared/ui/button/Button";

const WorkspaceDetailsPage = () => {
	const {id} = useParams();
	const [workspace, setWorkspace] = useState<any>(null);
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/?userId=1&id=${id}`)
			.then((response) => response.json())
			.then((json) => setWorkspace(json))
			.catch((err) => console.error(err));
	}, [id]);

	console.log(workspace);
	// todo

	return (
		<div>
			WorkspaceDetailsPage id: {id}

			{
				// TODO
				workspace && (
					<React.Fragment>
						<h2>{workspace[0].title}</h2>
						<p>{workspace[0].body}</p>
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