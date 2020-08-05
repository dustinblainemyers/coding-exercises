function validSolution(board) {
  let PuzzleHash = { column: {}, row: {} };

  PuzzleHash.squares = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
  };
  let columnCount = 0;
  let rowCount = 0;
  let oneSquareCount = 1;
  let twoSquareCount = 1;
  let threeSquareCount = 1;
  let fourSquareCount = 1;
  let fiveSquareCount = 1;
  let sixSquareCount = 1;
  let sevenSquareCount = 1;
  let eightSquareCount = 1;
  let nineSquareCount = 1;
  for (let i = 0; i < board.length; i++) {
    PuzzleHash.row[i] = {};

    for (let j = 0; j < board[i].length; j++) {
      if (!PuzzleHash.column[j]) {
        PuzzleHash.column[j] = {};
      }

      if (
        Object.values(PuzzleHash.row[i]).includes(board[i][j]) ||
        Object.values(PuzzleHash.column[j]).includes(board[i][j]) ||
        0
      ) {
        return false;
      }
      PuzzleHash.row[i][j] = board[i][j];
      PuzzleHash.column[j][i] = board[i][j];

      if (j < 3) {
        if (i < 3) {
          let squareCount = 1;
          PuzzleHash.squares[1][squareCount] = board[i][j];
          squareCount++;
        }

        if (i > 2 && i < 6) {
          let squareCount = 1;
          PuzzleHash.squares[2][squareCount] = board[i][j];
          squareCount++;
        }

        if (i > 5) {
          PuzzleHash.squares[3][threeSquareCount] = board[i][j];
          console.log("hello");
          threeSquareCount++;
        }
      }
    }
  }
  console.log(PuzzleHash);
}

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]);
