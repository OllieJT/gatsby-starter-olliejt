/* eslint-disable import/prefer-default-export */
import useGet from './get';

/*= ========
	Query Utilities
======== */

function queryTemplate(query: string, hasAuth: boolean, structure?: Function) {
	const headers = hasAuth
		? {
				'Client-ID': 'e153436ab00894b7b39800dc613b68aeaa8d39477b6308be',
				'content-type': 'application/json',
		  }
		: {
				'content-type': 'application/json',
		  };

	return useGet({
		url: `https://mixer.com/api/v1/${query}`,
		headers,
		structure,
	});
}

/*= ========
	Queries
======== */
export function getMixerUserID(userName: string): string | null {
	const query = `channels/${userName}/details`;
	const results = queryTemplate(query, false);
	const channel = results && results.data;
	const user = channel && channel.user.id;

	return user;
}

export function getMixerChannel(userName: string): fetchResponse {
	const query = `channels/${userName}/details`;
	const results = queryTemplate(query, false);

	return results;
}
