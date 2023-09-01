/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
	let regex = /[&|<|>|"|']/g;
	let htmlString = str.replace(regex, function(match) {
		if (match === '&') {
			return '&amp;';
		} else if (match === '<') {
			return '&lt;';
		} else if (match === '>') {
			return '&gt;';
		} else if (match === '"') {
			return '&quot;';
		} else {
			return '&apos;';
		}
	});

	return htmlString;
}

convertHTML('Dolce & Gabbana');

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML('Sixty > twelve'));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML('<>'));
console.log(convertHTML('abc'));
