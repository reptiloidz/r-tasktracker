import React from 'react';
import {Button} from "../shared/ui/button/Button";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div>
			Ничего не найдено

			<Link to={'/'}>На главную</Link>
		</div>
	);
};

export {NotFoundPage};