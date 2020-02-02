/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import { useState } from 'react';

interface SetMenu {
	isOpen: boolean;
	setMenu: Function;
	toggleMenu: any;
}

export default function useMenu(defaultState = false): SetMenu {
	const [isOpen, setMenu] = useState(defaultState);
	function toggleMenu() {
		setMenu(!isOpen);
	}

	return {
		isOpen,
		setMenu,
		toggleMenu,
	};
}
