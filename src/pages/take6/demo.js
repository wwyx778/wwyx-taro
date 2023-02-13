var rowCount = 3;
var columnCount = 3;
var players = [];
var currentPlayerIndex = 0;

// Initialize the game board
var gameBoard = [];
for (var i = 0; i < rowCount; i++) {
  var row = [];
  for (var j = 0; j < columnCount; j++) {
    row.push("");
  }
  gameBoard.push(row);
}

// Add players to the game
function addPlayer(name) {
  players.push({ name: name, symbol: "P" + players.length });
}

// Play a turn
function playTurn(player, row, column) {
  if (gameBoard[row][column] === "") {
    gameBoard[row][column] = player.symbol;
    checkForWinner();
    nextPlayer();
  } else {
    console.log("This cell is already occupied. Please choose another cell.");
  }
}

// Check for winner
function checkForWinner() {
  for (var i = 0; i < rowCount; i++) {
    for (var j = 0; j < columnCount - 2; j++) {
      if (gameBoard[i][j] === gameBoard[i][j + 1] && gameBoard[i][j + 1] === gameBoard[i][j + 2] && gameBoard[i][j] !== "") {
        console.log("Player " + gameBoard[i][j] + " has won the game!");
        resetGame();
      }
    }
  }

  for (var i = 0; i < columnCount; i++) {
    for (var j = 0; j < rowCount - 2; j++) {
      if (gameBoard[j][i] === gameBoard[j + 1][i] && gameBoard[j + 1][i] === gameBoard[j + 2][i] && gameBoard[j][i] !== "") {
        console.log("Player " + gameBoard[j][i] + " has won the game!");
        resetGame();
      }
    }
  }

  for (var i = 0; i < rowCount - 2; i++) {
    for (var j = 0; j < columnCount - 2; j++) {
      if (gameBoard[i][j] === gameBoard[i + 1][j + 1] && gameBoard[i + 1][j + 1] === gameBoard[i + 2][j + 2] && gameBoard[i][j] !== "") {
        console.log("Player " + gameBoard[i][j] + " has won the game!");
        resetGame();
      }
    }
  }

  for (var i = 0; i < rowCount - 2; i++) {
    for (var j = 2; j < columnCount; j++) {
      if (gameBoard[i][j] === gameBoard[i + 1][j - 1] && gameBoard[i + 1][j - 1] === gameBoard[i + 2][j - 2] && gameBoard[i][j] !== "") {
        console.log("Player " + gameBoard[i][j] + " has won the game!");
        resetGame();
      }
    }
  }
}

// Move to the next player
function nextPlayer() {
  currentPlayerIndex++;
  if (currentPlayerIndex === players.length) {
    currentPlayerIndex = 0;
  }
}

// Reset the game
function resetGame() {
  gameBoard = [];
  for (var i = 0; i < rowCount; i++) {
    var row = [];
    for (var j = 0; j < columnCount; j++) {
      row.push("");
    }
    gameBoard.push(row);
  }
  currentPlayerIndex = 0;
}

// Example usage
addPlayer("Player 1");
addPlayer("Player 2");
playTurn(players[0], 0, 0);
playTurn(players[1], 0, 1);
playTurn(players[0], 1, 1);
playTurn(players[1], 1, 2);
playTurn(players[0], 2, 2);
