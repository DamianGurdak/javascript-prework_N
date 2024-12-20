{
  const playGame = function (playerInput) {
    clearMessages();
    console.log('-----------------');

    const getMoveName = function (moveId) {
      if (moveId == 1) {
        return 'kamień';
      } else if (moveId == 2) {
        return 'papier';
      } else if (moveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + moveId + '.');
        return 'nieznany ruch';
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Komputer wpisał: ' + computerMove);
    console.log('Gracz wpisał: ' + playerInput);

    const displayResult = function (computerMove, playerMove) {
      console.log('move PC:', computerMove);
      console.log('move USER:', playerMove);
      printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

      if (
        (computerMove == 'kamień' && playerMove == 'papier') ||
        (computerMove == 'nożyce' && playerMove == 'kamień') ||
        (computerMove == 'papier' && playerMove == 'nożyce')
      ) {
        printMessage('Ty wygrywasz!');
      } else if (computerMove == playerMove) {
        printMessage('Mamy remis! Spróbój jeszcze raz!');
      } else if (playerMove == 'nieznany ruch') {
        printMessage('Twój ruch jest błędny! Spróbój jeszcze raz!');
      } else {
        printMessage('Tym razem przegrywasz :(');
      }
    };

    displayResult(computerMove, playerMove);
  };

  function setupEventListeners() {
    document.getElementById('play-rock').addEventListener('click', function () {
      playGame(1);
    });
    document
      .getElementById('play-paper')
      .addEventListener('click', function () {
        playGame(2);
      });
    document
      .getElementById('play-scissors')
      .addEventListener('click', function () {
        playGame(3);
      });
  }

  setupEventListeners();
}
