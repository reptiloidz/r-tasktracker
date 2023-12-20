import {useEffect, useRef, useState} from 'react';

const useFirstRender = (): boolean => {
	// реализовать хук, срабатывающий только при первом рендере
	const state = useRef<boolean>(true);

	if (state.current) {
		state.current = false;

		// console.log('componentDidMount');
		return true;
	}

	return false;
};

export { useFirstRender };
