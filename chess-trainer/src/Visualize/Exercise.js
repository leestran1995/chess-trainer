import Chessboard from "chessboardjsx";
import { useState } from "react";

const Exercise = () => {
  const [success, setSuccess] = useState(false);

  const Chess = require("chess.js");
  const chess = new Chess();
  for (var i = 0; i < 8; i++) {
    const moves = chess.moves();
    const moveToMake = moves[Math.floor(Math.random() * moves.length)];
    chess.move(moveToMake);
  }

  const moves = chess.moves();
  const moveToVisualize = moves[Math.floor(Math.random() * moves.length)];
  const otherMoves = moves.filter((move) => move != moveToVisualize);
  const startingFen = chess.fen();

  var successBoard = new Chess(startingFen);
  successBoard.move(moveToVisualize);
  const emptyArrays = [null, null, null];
  const badBoards = emptyArrays
    .map((board) => {
      var badBoard = new Chess(startingFen);
      badBoard.move(otherMoves.pop());
      return badBoard;
    })
    .map((board) => ({ correct: false, board: board }));

  const successBoardChoice = { correct: true, board: successBoard };

  const allBoards = [...badBoards, successBoardChoice];
  const allBoardsShuffled = allBoards
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return (
    <div className="startingPositionBoard">
      <h2>Starting position</h2>
      <Chessboard
        position={chess.fen()}
        calcWidth={(screenWidth) => screenWidth.screenHeight / 3}
      />
      <p>{moveToVisualize}</p>
      <div className="multChoiceContainer">
        {allBoardsShuffled.map((board) => {
          return (
            <div className="chessBoard">
              <Chessboard
                position={board.board.fen()}
                calcWidth={(screenWidth) => screenWidth.screenHeight / 3}
              />
              <input
                type="radio"
                name="board"
                onClick={(e) => setSuccess(board.correct)}
              />
            </div>
          );
        })}
      </div>
      <button>Submit</button>
      <h1>{success ? "Correct" : "Wrong!"}</h1>
    </div>
  );
};

export default Exercise;
