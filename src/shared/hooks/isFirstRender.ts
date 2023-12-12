import {useEffect, useRef, useState} from 'react';

const useFirstRender = (): boolean => {
	// реализовать хук, срабатывающий только при первом рендере
	const [state, setState] = useState(true);

	useEffect(() => {
		console.log('componentDidMount');
		setState(false);
	}, []);

	return state;
}

export {useFirstRender};
