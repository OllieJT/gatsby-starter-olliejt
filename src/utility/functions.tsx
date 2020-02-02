/* eslint-disable */
export const IS_BROWSER = typeof window !== 'undefined';

export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export function cleanUrl(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace('https://', '')
		.replace('http://', '')
		.replace('www.', '');
}

export function getYoutubeID(url: string) {
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	const match = url.match(regExp);
	return match && match[7].length == 11 ? match[7] : false;
}

export function shuffle(array: Array<any>) {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export function emojiCursor(emoji: string) {
	return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>${emoji}</text></svg>") 16 0, auto;`;
}

export function stringList(string: string): string {
	return string.replace(/(^,)|(,$)/g, '').replace(/(^&)|(&$)/g, '');
}

export function generateKey(pre: string): string {
	return `${pre}_${new Date().getTime()}`;
}
