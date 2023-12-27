import React, { useState } from 'react';
import { WorkspaceProps } from './typings';
import { Link } from 'react-router-dom';
import { Button } from '../../../../shared/ui/button/Button';
import { database } from '../../../../app/firebase';
import { Popup } from '../../../../shared/components/popup/Popup';
import { useBoards } from '../../../../shared/hooks/useBoards';

const Workspace = ({ id, title, description }: WorkspaceProps) => {
	return (
		<React.Fragment>
			<li>
				<Link className="widget widget--primary widget--interactive" to={`/workspace/${id}`}>
					<p className="widget__title link">
						<span className="link__text">
							{title}
						</span>
					</p>

					<span>{id}</span>

					{description && <span className="widget__description">{description}</span>}
					{/*// todo lint*/}
				</Link>
			</li>
		</React.Fragment>
	);
};

export { Workspace };
