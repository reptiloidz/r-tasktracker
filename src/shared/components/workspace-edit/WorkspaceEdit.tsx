import React from 'react';
import {useParams} from "react-router-dom";

const WorkspaceEdit = () => {

	const {id} = useParams();

	return (
		<div>
			WorkspaceEdit {id}
		</div>
	);
};

export {WorkspaceEdit};