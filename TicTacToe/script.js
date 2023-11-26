let board = document.querySelector('.board');
let message_element = document.querySelector('.message');
let moves_count = 0;

for (let i = 0; i < 9; i++) {
	let button = document.createElement('a');

	button.onclick = function (event) {
		event.preventDefault();
		if (this.textContent == '') {
			moves_count++;

			let symbol = (moves_count % 2 != 0) ? 'x' : 'o';
			this.textContent = symbol;

			if (checkWinner(symbol)) {
				announceWinner(symbol);
			}
		}
	};
	button.setAttribute('href', '#');
	board.append(button);
}

document.querySelector('.reset').onclick = function (event) {
	event.preventDefault();
	for (let button of board.children) {
		button.textContent = '';
	}

	moves_count = 0;
	message_element.textContent = '';
}

let win_combinations = [
	// rows
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	// columns
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	// diagonals
	[0, 4, 8],
	[2, 4, 6],
];

function checkWinner(symbol) {
	let buttons = board.children;
	for (let combination of win_combinations) {
		if (
			buttons[combination[0]].textContent == symbol &&
			buttons[combination[1]].textContent == symbol &&
			buttons[combination[2]].textContent == symbol
		) {
			return symbol;
		}
	}

	return false;
}


function announceWinner(symbol) {
	message_element.textContent = 'Winner is ' + symbol + '!';
}

/*
	 1. [+] pie klikšķa ievietot šūnā 'x'
	 2. [+] ieveitot vērtības 'x' vai 'o' atkarībā no ieveitoto vērtību skaita
	 3. [+] neļāut mainīt vērtību (nevar ielikt tur kur jau atrodas vērtība);
	 4. uzvarētāja noteikšana
	 5. uzvarētāja paziņošana
*/

/*
i, - interātors kas mainās no 0 līdz 9
board, - satur spēles laukuma elementu
button, - satur pogas elementu
document, - satur visu dokument
this, - satur elementu uz kura notika notikums (button)
event - satur notikuma objektu
*/


/*
PROBLĒMA: Atrast atslēgas

function findKeys(images, map) {
	 ....??
	 ...??
	 return coords;
}

let keys_images = ...;
let search_map = ...;

let coords = findKeys(keys_images, search_map);

*/

/**
 ALGORITM for function:
	 1. funkcijas nosaukums
	 2. ko funkcija atgriezīs vai izdarīs
	 3. gādi būs parametri
 */


/**
 ALGORITMS UZDEVUMU RISINĀŠANĀ
 1. Saprast uzdevumu
 2. Idejas un jautājumi (... kur jāraksta? kas jāraksta?)
 3. Saskaldīt uzdevumu apakšuzdevumos.
 */