/* eslint-disable import/prefer-default-export */
// import our action creators
import { useEffect, useReducer } from 'react';
import { Action, requestFailed, requestStarted, requestSuccessful } from './actions';
import reducer from './reducer';

interface Props {
	url: string;
	headers: any;
	structure?: Function;
}

export default ({ url, headers, structure }: Props) => {
	const [state, dispatch] = useReducer(reducer, {
		isLoading: true,
		data: null,
		error: null,
	});

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			dispatch(requestStarted());

			try {
				const response = await fetch(url, {
					headers,
					signal: abortController.signal,
				});

				if (!response.ok) {
					throw new Error(`${response.status} ${response.statusText}`);
				}

				response.json().then((data: Action) => dispatch(requestSuccessful({ data, structure })));

				// dispatch(requestSuccessful({ data }));
			} catch (e) {
				// only call dispatch when we know the fetch was not aborted
				if (!abortController.signal.aborted) {
					dispatch(requestFailed({ error: e.message }));
				}
			}
		};

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [headers, structure, url]);

	return state;
};
