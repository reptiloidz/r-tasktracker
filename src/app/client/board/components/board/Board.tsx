import React, {useState} from 'react';
import {BoardProps, OneBoard} from "./typings";
import {Button} from "../../../../../shared/ui/button/Button";
import {Link, useParams} from "react-router-dom";
import {Popup} from "../../../../../shared/components/popup/Popup";
import {database} from "../../../../firebase";
import {Dropdown} from "../../../../../shared/ui/dropdown/Dropdown";
import {useWorkspaces} from "../../../../../shared/hooks/useWorkspaces";
import {BoardNew} from "../../widgets/board-new/BoardNew";
import {BoardNewProps} from "../../widgets/board-new/typings";
import {useBoards} from "../../../../../shared/hooks/useBoards";

//  uuid
const Board = ({boards, isLoading}: BoardProps) => {

	const {id} = useParams();

	const [isOpen, setIsOpen] = useState(false);
	const [newBoardTitle, setNewBoardTitle] = useState('');
	const [newBoardRelated, setNewBoardRelated] = useState(id);

	const createBoard = () => {
		setIsOpen(!isOpen);
	};

	const closePopup = () => {
		setIsOpen(!isOpen);
	};

	const newBoardWorkspace: BoardNewProps['onDropdownChange'] = (e) => {
		setNewBoardRelated(e.target.value);
	}

	const newBoardHeading: BoardNewProps['onInputChange'] = (e) => {
		setNewBoardTitle(e.target.value);
	}


	const pushNewBoard = () => {
		database.ref('boards').push({
			title: newBoardTitle,
			relatedTo: newBoardRelated,
		}).catch(alert);
	};

	const [loading, workspaces] = useWorkspaces();


	// todo get board id

	// boards.filter()
	const boardCollection = boards.map(
		(board) => {
			if (id !== board.relatedTo?.toString()) return null;

			return (
				<li
					key={board.id}
					/* key пишем у обертки итерируемого эл-та,
					* иначе ошибка child in a list should have a unique "key" prop. */
				>
					<Link
						className='desk'
						to={`/board/${board.id}`}
					>
						<h3>
							{board.title}
						</h3>
					</Link>
				</li>
			);
		}
	);

	return (
		<React.Fragment>
			<ol className='row md:row-cols-3'>
				{boardCollection}

				<li>
					<div style={{display: 'flex'}}>
						<BoardNew
							isOpen={isOpen}
							onCancel={closePopup}
							dropdownValue={newBoardRelated}
							dropdownOptions={workspaces}
							onDropdownChange={newBoardWorkspace}
							onSubmit={pushNewBoard}
							onInputChange={newBoardHeading}
						/>

						<Button
							className='btn btn--primary btn--xs'
							onClick={createBoard}
						>
							Создать доску
						</Button>
					</div>
				</li>
			</ol>
		</React.Fragment>
	);
};

export {Board};
