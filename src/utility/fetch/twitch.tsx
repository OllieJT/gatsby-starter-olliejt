/* eslint-disable import/prefer-default-export */
import useGet from './get';

/*= ========
	Query Utilities
======== */

function queryTemplate(query: string, structure?: Function) {
	return useGet({
		url: `https://api.twitch.tv/helix/${query}`,
		headers: {
			'Client-ID': '0bh0nggdqztawiqi7idcj32z6n1o8k',
			'content-type': 'application/json',
		},
		structure,
	});
}

function userQuery(names: Array<string>) {
	const userList = names.map(name => `&login=${name}`).join();
	const query = userList.replace(',', '').replace(/(^&login=)|(&login=$)/g, '');

	return query;
}

/*= ========
	Queries
======== */

export function getTwitchUserID(userName: string): string | null {
	const query = `users?login=${userName}`;
	const results = queryTemplate(query);
	const allUsers = results && results.data;
	const user = allUsers && allUsers[0].id;

	return user;
}

export function getTwitchChannel(userName: string): fetchResponse {
	// const queries = `/streams?user_login=${userQuery(userNames)}`;
	const query = `streams?user_login=${userName}`;
	const results = queryTemplate(query);

	return results;
}

export function getTwitchUsers(userNames: Array<string>): fetchResponse {
	const query = `users?login=${userQuery(userNames)}`;
	const results = queryTemplate(query);

	return results;
}

export function getTwitchClips(userId: string): fetchResponse {
	const query = `clips?broadcaster_id=${userId}`;
	const results = queryTemplate(query);

	return results;
}

export function getTwitchVideos(userId: string): fetchResponse {
	const query = `videos?user_id=${userId}`;
	const results = queryTemplate(query);

	return results;
}
