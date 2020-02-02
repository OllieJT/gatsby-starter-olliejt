/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer } from 'react';
import { Action, requestFailed, requestStarted, requestSuccessful } from '../../hooks/use-get-data/actions';
import reducer from '../../hooks/use-get-data/reducer';

interface Props {
	url: string;
	headers: any;
}

export default ({ url, headers }: Props) => {
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

				response.json().then(({ data }: Action) => dispatch(requestSuccessful({ data })));

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
	}, [headers, url]);

	return state;
};
