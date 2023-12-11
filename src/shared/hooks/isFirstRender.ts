import {useEffect, useState} from 'react';

const useFirstRender = (): boolean => {
	// реализовать хук, срабатывающий только при первом рендере
	const [state, setState] = useState(true);

	useEffect(() => {
		setState(false);
	}, []);

	return state;
}

export {useFirstRender};
