let gameBoardModule = (function () {
    let gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    let winner;
    const player1 = {
      name: "player1",
      marker: "X",
      turn: "true"
    };
    const player2 =
    {
      name: "player2",
      marker: "O",
      turn: "true"
    };
     const gameBoardItems = document.querySelectorAll(".col");
    for (let i = 0; i < gameBoardItems.length; i++) {
      gameBoardItems[i].addEventListener("click", () => {
        if (player1.turn) {
          if (!turnTaken(gameBoardItems[i])) {
            gameBoardArray[i] = player1.marker;
          }
          player1.turn = false;
          player2.turn = true;
          statusOfGameBoard();
          gameModule.checkTie(gameBoardArray);
          winner = gameModule.getWinner(gameBoardArray, player1.marker);
          if (winner) {
            gameModule.displayWinner(winner);
          }
        } else {
          if (!turnTaken(gameBoardItems[i])) {
            gameBoardArray[i] = player2.marker;
          }
          player2.turn = false;
          player1.turn = true;
          statusOfGameBoard();
          gameModule.checkTie(gameBoardArray);
          winner = gameModule.getWinner(gameBoardArray, player2.marker);
          if (winner) {
            gameModule.displayWinner(winner);
          }
        }
      });
    }
    function statusOfGameBoard() {
      for (let i = 0; i < gameBoardArray.length; i++) {
        const gameBoardItem = document.querySelector(`#col-${i + 1}`);
        if (gameBoardArray[i] === "X") {
          gameBoardItem.style.color = "red";
        } else {
          gameBoardItem.style.color = "green"
        }
  
        gameBoardItem.innerHTML = `${gameBoardArray[i]}`;
      }
    }
    function turnTaken(element) {
      if (element.innerHTML === "X" || element.innerHTML === "O") {
        return true;
      }
    }
    return {
      gameBoardArray,
      turnTaken
    }
  })();
  let gameModule = (function () {
  
    const winnerNameElement = document.querySelector("#winner");
  
    function turnTaken(element) {
      if (element === "X" || element === "O") {
        return true;
      } 
    }
    function checkTie(array) {
      let counter = 0;
      for (let i = 0; i < array.length; i++) {
        let taken = turnTaken(array[i]);
        if (taken) {
          counter++;
        }
      }
      if (counter === 9) {
        winnerNameElement.innerHTML = "It's a Tie";
      }
    }
   function getWinner([array1, array2, array3, array4, array5, array6, array7, array8, array9], marker) {
      let winnerArray = [];
      if (array1 === marker) {
        winnerArray.push(1);
        if (array2 === marker) {
          winnerArray.push(2);
          if (array3 === marker) {
            winnerArray.push(3);
            return { winnerArray, marker };
          }
        } else if (array4 === marker) {
          winnerArray.push(4);
          if (array7 === marker) {
            winnerArray.push(7);
            return { winnerArray, marker };
          }
        } else if (array5 === marker) {
          winnerArray.push(5);
          if (array9 === marker) {
            winnerArray.push(9);
            return { winnerArray, marker };
          }
        }
      }
      if (array2 === marker) {
        winnerArray.push(2);
        if (array5 === marker) {
          winnerArray.push(5);
          if (array8 === marker) {
            winnerArray.push(8);
            return { winnerArray, marker };
          }
        }
      }
      if (array3 === marker) {
        winnerArray.push(3);
        if (array6 === marker) {
          winnerArray.push(6);
          if (array9 === marker) {
            winnerArray.push(9);
            return { winnerArray, marker };
          }
        } else if (array5 === marker) {
          winnerArray.push(5);
          if (array7 === marker) {
            winnerArray.push(7);
            return { winnerArray, marker };
          }
        }
      }
      if (array4 === marker) {
        winnerArray.push(4);
        if (array5 === marker) {
          winnerArray.push(5);
          if (array6 === marker) {
            winnerArray.push(6);
            return { winnerArray, marker };
          }
        }
      }
      if (array7 === marker) {
        winnerArray.push(7);
        if (array8 === marker) {
          winnerArray.push(8);
          if (array9 === marker) {
            winnerArray.push(9);
            return { winnerArray, marker };
          }
        }
      }
      console.log(winnerArray);
    }
  
    function displayWinner(winner) {
  
      if (winner.marker === "X") {
       /* alert("palyer1 win");*/
        winnerNameElement.innerHTML = "Player 1 Beat Player 2";
    
      } else {
        winnerNameElement.innerHTML = "Player 2 Beat Player 1";
        /*alert("palyer2 win");*/
      }
    }
    return {
      getWinner,
      displayWinner,
      checkTie
    }
  })();
  