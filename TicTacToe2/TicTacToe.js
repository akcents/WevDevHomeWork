class TicTacToe {

	constructor(board_selector, msg_element_selector) {
		this.board = document.querySelector(board_selector);
		this.msg_element = document.querySelector(msg_element_selector);
		this.moves_count = 0;
		this.win_combinations = [
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

		let obj = this;

		for (let i = 0; i < 9; i++) {
			let button = document.createElement('a');

			button.onclick = function (event) {
				event.preventDefault();
				obj.makeMove(this);
			};
			button.setAttribute('href', '#');
			this.board.append(button);
		}
	}

	/**
	 * return winner symbol if there is a winner
	 * 
	 * @param {string} symbol - 'x' || 'o'
	 * @returns symbol || false
	 */
	checkWinner(symbol) {
		let buttons = this.board.children;
		for (let combination of this.win_combinations) {
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

	announceWinner(symbol) {
		this.msg_element.textContent = 'Winner is ' + symbol + '!';
	}

	makeMove(button) {
		if (button.textContent == '') {
			this.moves_count++;

			let symbol = (this.moves_count % 2 != 0) ? 'x' : 'o';
			button.textContent = symbol;

			if (this.checkWinner(symbol)) {
				this.announceWinner(symbol);
			}
		}
	};

	reset() {
		for (let button of this.board.children) {
			button.textContent = '';
		}
		this.moves_count = 0;
		this.msg_element.textContent = '';
	}
}