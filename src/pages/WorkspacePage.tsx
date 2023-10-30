import React from 'react';
import Workspace from "../shared/components/workspace/Workspace";

const WorkspacePage = () => {
	return (
		<React.Fragment>
			<Workspace
				props={[
					{
						link: '/board',
						text: 'Рабочее пространство 1',
						boards: [
							{boardTitle: '121'}
						]
					},
					{
						link: '/board',
						text: 'Рабочее пространство 2',
						boards: [
							{boardTitle: '3345'}
						]
					},
					{
						link: '/board',
						text: 'Рабочее пространство 3',
						boards: [
							{boardTitle: '87878'}
						]
					},
				]}
			/>
		</React.Fragment>
	);
};

export default WorkspacePage;