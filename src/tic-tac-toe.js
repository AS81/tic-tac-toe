class TicTacToe {
  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.turn = 0;
  }

  getCurrentPlayerSymbol() {
    return this.turn % 2 === 1 ? "o" : "x";
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.board[rowIndex][columnIndex] === null) {
      this.board[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.turn++;
    }
  }

  isFinished() {
    return this.getWinner() || this.isDraw() ? true : false;
  }

  getWinner() {
    if (
      ((this.board[0][0] === this.board[1][1]) === this.board[2][2]) !==
      null
    ) {
      return this.board[0][0];
    } else if (
      ((this.board[2][0] === this.board[1][1]) === this.board[0][2]) !==
      null
    ) {
      return this.board[0][2];
    } else {
      for (let i = 0; i <= 2; i++) {
        if (
          ((this.board[i][0] === this.board[i][1]) === this.board[i][2]) !==
          null
        ) {
          return this.board[i][0];
        } else if (
          ((this.board[0][i] === this.board[1][i]) === this.board[2][i]) !==
          null
        ) {
          return this.board[0][i];
        }
      }
    }
    return null;
  }

  noMoreTurns() {
    this.board[0].indexOf(null) !== -1 ||
    this.board[1].indexOf(null) !== -1 ||
    this.board[2].indexOf(null) !== -1
      ? false
      : true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner() ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
