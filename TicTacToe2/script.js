let tic = new TicTacToe('#first_game_field .board', '#first_game_field .message');
let tac = new TicTacToe('#second_game_field .board', '#second_game_field .message');

document.querySelector('#first_game_field .reset').onclick = function (event) {
	event.preventDefault();
	tic.reset();
}

document.querySelector('#second_game_field .reset').onclick = function (event) {
	event.preventDefault();
	tac.reset();
}



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