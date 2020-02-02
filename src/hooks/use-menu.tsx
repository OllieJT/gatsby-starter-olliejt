/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import { useState } from 'react';

export default function useMenu(defaultState = false): SetMenu {
	const [isOpen, setMenu] = useState(defaultState);
	function toggleMenu() {
		setMenu(!isOpen);
	}

	return {
		isOpen,
		setMenu,
		toggleMenu,
		breakpoint: '800px',
	};
}
