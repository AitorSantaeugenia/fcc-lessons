/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

A base-paired DNA sequence:
ATCGATTGAGCTCTAGCG
TAGCTAACTCGAGATCGC
*/
function pairElement(str) {
	var pairs = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	};

	let arr = str.split('');
	return arr.map((x) => [ x, pairs[x] ]);
}

console.log(pairElement('GCG'));
console.log(pairElement('ATCGA'));
console.log(pairElement('TTGAG'));
console.log(pairElement('CTCTA'));
