/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from './constants';

export type Action = {
	isLoading?: boolean;
	data?: any;
	error?: any;
	structure?: Function;
};

export const requestStarted = () => ({
	type: REQUEST_STARTED,
});

export const requestSuccessful = ({ data, structure }: Action) => {
	const results = data && data.data ? data.data : data;

	return {
		type: REQUEST_SUCCESSFUL,
		data: structure ? structure(results) : results,
	};
};

export const requestFailed = ({ error }: Action) => ({
	type: REQUEST_FAILED,
	error,
});
