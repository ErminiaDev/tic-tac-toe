import { WINNING_COMBINATIONS } from "./winning-combinations";

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
	currentPlayer = "O";
  }

  return currentPlayer;
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function deriveGameBoard(gameTurns) {
  //to not overwrite initialGameBoard
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
	const { square, player } = turn;
	const { row, col } = square;
	gameBoard[row][col] = player;
  }

  return gameBoard;
}

export function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
	const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
	const secondSquareSymbol =
	  gameBoard[combination[1].row][combination[1].col];
	const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

	if (
	  firstSquareSymbol &&
	  firstSquareSymbol === secondSquareSymbol &&
	  firstSquareSymbol === thirdSquareSymbol
	) {
	  winner = players[firstSquareSymbol];
	}
  }
  return winner;
}